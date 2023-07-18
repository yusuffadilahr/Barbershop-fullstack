import users from "../models/usermodels.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

export const getusers = async(req, res) => {
    try {
        const Users = await users.findAll({
            attributes:['id', 'name', 'email']
        });
        res.json(users)
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json ({msg: "Password Tidak Cocok!"})
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "berhasil"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "wrong password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await users.update({refresh_token: refreshToken},{
            where:{
                id:userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httponly:true,
            maxAge:24 * 60 * 60 * 1000
        });

        res.json({accessToken});
        
    } catch (error) {
        res.status(404).json({msg: "email tak ditemukan"})
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].id;
        await users.update({refresh_token: null},{
            where:{
                id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
}