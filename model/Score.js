var db = require('../Controller/dbConfig');
var category = require('./Category')
var user = require('./User')

var score = db.sequelize.define('score', {
    //attributes

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    country1: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    country2: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    run1: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    run2: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    over1: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    over2: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    target: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },


    matchdetails: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    result: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
},
    {

        freezeTableName: true,
        tableName: 'scoreTable',
        paranoid: true
    }
)
category.category.hasMany(score);
score.belongsTo(category.category);


user.user.hasMany(score);
score.belongsTo(user.user);

score.sync({ force:false })
    .then(function () {

    })

    .catch(function (err) {
        console.log(err)
    })




module.exports = {
    db, score
}