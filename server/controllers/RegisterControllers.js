const registerService = require("../services/registerServices")
require('dotenv').config()
const bcrypt = require('bcrypt')
const mysql = require('mysql')
const connection = require('../../configs/DBConnection')

const getPageRegister = (req, res) => {
    res.render('Register_Page')
}


const createNewUser = (req, res) => {
    const newUser = {
        male: req.body.male,
        female: req.body.female, 
        firstname:req.body.firstname,
        middlename:req.body.middelname,
        lastname: req.body.lastname,
        countrycode: req.body.countrycode,
        phonecode:req.body.phonecode, 
        contactnummber: req.body.contactnumber,
        email: req.body.email,
        password:req.body.password,
        comments:req.body.comments
    }
    try {
        registerService.createNewUser(newUser)
        return res.render('/Login_page')
    }catch (err){
        res.flash(err)
        return res.render('Register_Page')
    }

}
//
module.exports = {
    getPageRegister:getPageRegister,
    createNewUser:createNewUser
}