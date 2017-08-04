var sequelize = require('sequelize');
var dbService = require('../Service/SequelizeService.js');

const Chart = dbService.define('chart', {

    chartNumber	: { type :	sequelize.INTEGER(11), allowNull : false },
    status : { type :	sequelize.INTEGER(1), allowNull : true },
    heartRate : { type :	sequelize.INTEGER(3), allowNull : true },
    pulseRate : { type :	sequelize.INTEGER(3), allowNull : true },
    bodyTemporature : { type :	sequelize.INTEGER(3), allowNull : true },
    systoleBloodPressure : { type :	sequelize.INTEGER(3), allowNull : true },
    diastoleBloodPressure : { type :	sequelize.INTEGER(3), allowNull : true },
    bloodGlucose : { type :	sequelize.INTEGER(3), allowNull : true },
    mealTerm : { type :	sequelize.INTEGER(3), allowNull : true },
});

module.exports = Chart;
