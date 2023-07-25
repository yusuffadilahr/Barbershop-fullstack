import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const reports = db.define('reports', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reportIssue: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,   
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

export default reports;