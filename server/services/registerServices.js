const mysql = require('mysql')
const connection = require ('../../configs/DBConnection')
const bcrypt = require('bcrypt')

const createNewUser = (data)=> {
    return new Promise ((resolve, reject)=> {
        let salt = bcrypt.genSaltSync(10)
        let userData = {
            male:data.male, 
            female:data.female,
            firstname: data.firstname,
            middlename:data.middelname,
            lastname:data.lastname, 
            countrycode: data.countrycode,
            phonecode:data.phonecode, 
            contactnumber: data.contactnumber, 
            email: data.email, 
            password:bcrypt.hashSync(data.password, salt), 
            comments:data.comments 
        }
        connection.query('INSERT INTO user_admin SET ?',[userData] , (err, rows) => {
            if(!err) {
                res.render('/login')
            }else { 
                console.log(err)
            }
        })
    })

}




module.exports = {
    createNewUser:createNewUser
}