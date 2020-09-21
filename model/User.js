var db = require('../Controller/dbConfig');
console.log(db.seq);

var user = db.sequelize.define('user', {
    //attributes

    id: {
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    fullname: {
        type:db.Sequelize.STRING,
        allowNull: false
    },


    email: {
        type:db.Sequelize.STRING,
        allowNull: false
       
    },

    phone: {
        type:db.Sequelize.STRING,
        allowNull: false

    },

    password: {
        type:db.Sequelize.STRING,
        allowNull: false
    },
    admin:{
        type: db.Sequelize.INTEGER,
        allowNull: true
    }
},
{

    freezeTableName: true,
    tableName: 'userTable',
    paranoid:true
}

)
user.sync({force:false})
.then(function(){

})

.catch(function(err){
    console.log(err)
})




module.exports = {
    db, user
}