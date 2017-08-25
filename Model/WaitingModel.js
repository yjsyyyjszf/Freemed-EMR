const waiting = require('../Entity/Waiting.js');

const WaitingModel = function(data){
    this.data = data;
}

/* Find */
WaitingModel.FindAll = function(status, callback){

    waiting.findAll({
        where : {
            status,
        },

        attributes: ['chart_id', 'name', 'birth', 'status'],
    })
        .then(result => {
            callback(result);
        })
        .catch(error => {
            callback(error);
        });
}

WaitingModel.Update = function (data, callback) {

    waiting.update({
        status : data.status
    },{
        where : {
            chart_id : data.chart_id
        }
    }).then(results => {
        callback(results);
    });
}

/* Create */
WaitingModel.Insert = function(data, callback){

    waiting.create({
        chart_id : data.dataValues.chartNumber,
        name : data.name,
    }).then(result => {
            callback(result);
    })
        .catch(error => {
            callback(error);
        });
}

module.exports = WaitingModel;
