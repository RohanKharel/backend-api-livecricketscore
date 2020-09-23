var db = require('../Controller/dbConfig');
console.log(db.seq);

var category = db.sequelize.define('category', 
{

id: {
    type:db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},

type: {
    type:db.Sequelize.STRING,
    allowNull: false
}
},
{
    freezeTableName: true,
    tableName: 'categoryTable',
    paranoid:true
}
)

category.sync({force:false})
.then(function(){

})

.catch(function(err){
    console.log(err)
})




module.exports = {
    db, category
}


