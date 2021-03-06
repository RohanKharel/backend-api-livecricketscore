var db = require('../Controller/dbConfig');
var user = require('./User')

var upcomingmatches = db.sequelize.define('upcomingmatches', {
    //attributes

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    country11: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    country22: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    matchdetails1: {
        type: db.Sequelize.STRING,
        allowNull: false

    },

    startdetail: {
        type: db.Sequelize.STRING,
        allowNull: false
        
    }
},
    {

        freezeTableName: true,
        tableName: 'upcomingmatchesTable',
        paranoid: true
    }
)


user.user.hasMany(upcomingmatches);
upcomingmatches.belongsTo(user.user);

upcomingmatches.sync({ force:false })
    .then(function () {

    })

    .catch(function (err) {
        console.log(err)
    })




module.exports = {
    db, upcomingmatches
}