const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');


// TODO - define the Song model
let Song;
Song= sequelize.define('Song',{
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    length: DataTypes.STRING

}
);
module.exports = {
    Song
};