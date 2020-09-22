var db = require('../Controller/dbConfig');
var user = require('./User')

var score = db.sequelize.define('score', {
    //attributes

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    run: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },


    type: {
        type: db.Sequelize.STRING,
        allowNull: false

    },

    result: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    Image: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
},
    {

        freezeTableName: true,
        tableName: 'scoreTable',
        paranoid: true
    }
)


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