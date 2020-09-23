var db = require('../Controller/dbConfig');
var user = require('./User');

var feedback = db.sequelize.define('feedback', {

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    comment: {
        type: db.Sequelize.STRING,
        allowNull: false
    }



},
{

    freezeTableName: true,
    tableName: 'feedbackTable',
    paranoid: true
}
)

user.user.hasMany(feedback);
feedback.belongsTo(user.user);

feedback.sync({ force: false })
    .then(function () {

    })

    .catch(function (err) {
        console.log(err)
    })




module.exports = {
    db, feedback
}