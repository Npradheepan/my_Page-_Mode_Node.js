const express = require('express')
const AllUserViewController = require('../controllers/AllUserViewControllers')
const HomeController = require('../controllers/HomeControllers')
const LoginController = require('../controllers/LoginControllers')
const RegisterController = require('../controllers/RegisterControllers')
const ProductsController = require('../controllers/ProductsControllers')
const ServicesController = require ('../controllers/ServicesControllers')
const EcommerceController = require('../controllers/EcommerceControllers')
const ContactController = require('../controllers/ContactControllers')
const router = express.Router()


//Home Pafe Routting  and Method
router.get('/', HomeController.getPageHome)

//Register_Page Routting and Methods
router.get('/Register_Page', RegisterController.getPageRegister)
router.post('/Register_Page', RegisterController.createNewUser)

//Login_Page Routting and Methods
router.get('/Login_Page',LoginController.getPageLogin )
router.post('/Login_Page' )

//All_User_Views method
router.get('/All_User_Views', AllUserViewController.getPageAllUserView )

//Production
router.get('/products',ProductsController.getPageProducts)

 //Services
 router.get('/services', ServicesController.getPageServices)

//E_Commerce
router.get('/E_Commerce', EcommerceController.getPageEcommerce)

//Contact
router.get('/Contact',ContactController.getPageContact)
module.exports = router;