const mysql = require('mysql')
const connection = require('../../configs/DBConnection')
const getPageAllUserView =(req, res) => {
    connection.query('SELECT * FROM user_admin WHERE  status="active" ',(err, rows) => {
        if(!err) {
            res.render('All_User_Views', {rows})
        }
    })
};

module.exports ={
    getPageAllUserView:getPageAllUserView,
}