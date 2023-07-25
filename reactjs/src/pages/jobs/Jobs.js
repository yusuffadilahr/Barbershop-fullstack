import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Jobs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [cv_path, setCv_path] = useState('');
    const [fileName, setFileName] = useState('');
    const history = useHistory();

    const isFormValid = () => {
        // Add any additional validation checks here if needed
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            phone.trim() !== '' &&
            position.trim() !== '' &&
            experience.trim() !== '' &&
            cv_path.trim() !== ''
        );
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setCv_path(reader.result);
            setFileName(file.name); // Update the file name state
        };

        reader.readAsDataURL(file);
    };

    const getJobs = async (e) => {
        e.preventDefault();

        // Check if the form is valid
        if (!isFormValid()) {
            window.alert('Harap isi semua field sebelum mengirimkan formulir!');
            return;
        }


        try {
            await axios.post('http://localhost:5000/jobs', {
                name: name,
                email: email,
                phone: phone,
                position: position,
                experience: experience,
                cv_path: cv_path
            });
            window.alert('Lamaran kamu segera di terima!');
            history.push('/dashboard');
        } catch (error) {
            if (error.response) {
                window.alert('Lamaran kamu gagal di terima!');
            }
        }
    }


    return (
        <div className='container'>
            <div className="card">
                <div className="card-content">
                    <p className="title is-size-6">Nama Lengkap</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Nama Lengkap"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Email</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Nomor Telepon</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Nomor Telepon"
                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Posisi yang di inginkan</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Posisi yang di inginkan"
                            value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Pengalaman Dalam Tahun</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Pengalaman Dalam Tahun"
                            value={experience} onChange={(e) => setExperience(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Upload CV</p>
                    <div className="file has-name">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                            />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Pilih File
                                </span>
                            </span>
                            <span className="file-name">
                                Nama File :  
                                {fileName}
                            </span>
                        </label>
                    </div>
                    <br></br>
                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <button className="button is-link" onClick={getJobs}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Jobs
