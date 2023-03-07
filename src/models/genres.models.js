const { DataTypes } = require("sequelize")
const db = require("../utils/database")
const Genres = db.define('genres', {
    id: {
        types: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        types: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})
module.exports = Genres