var db = require('../Controller/dbConfig');
var user = require('./User')

var playerpfrofile = db.sequelize.define('playerprofile', {
    //attributes

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    country: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    odirun: {
        type: db.Sequelize.STRING,
        allowNull: false

    },

    t20run: {
        type: db.Sequelize.STRING,
        allowNull: false

    },


    testrun: {
        type: db.Sequelize.STRING,
        allowNull: false
        
    },
    Wickets: {
        type: db.Sequelize.STRING,
        allowNull: false
        
    }
},
    {

        freezeTableName: true,
        tableName: 'playerprofileTable',
        paranoid: true
    }
)


user.user.hasMany(playerpfrofile);
playerpfrofile.belongsTo(user.user);

playerpfrofile.sync({ force:false })
    .then(function () {

    })

    .catch(function (err) {
        console.log(err)
    })




module.exports = {
    db, playerpfrofile
}