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

    country1: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    country2: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    matchdetails: {
        type: db.Sequelize.TEXT,
        allowNull: false

    },

    startdetail: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    Image1: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

    Image2: {
        type: db.Sequelize.TEXT,
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