const express = require('express');
const Router = express.Router();
const { registration, login } = require('../controller/Authcontroler');
const AuthenticateUser = require('../middleware/Userauth');
const { SubmitForm } = require('../controller/Contactcontroler');
const { Getproduct } = require('../controller/Productcontroler');
const {GetHuntProducts}=require('../controller/Huntcontroler')

Router.route('/register').post(registration);
Router.route('/login').post(login, AuthenticateUser);
Router.route('/contact').post(SubmitForm);
Router.route('/Cr/:product_id').get(Getproduct); // Use GET request for fetching product details

Router.route('/hunt/:category?/:minPrice?/:maxPrice?/:reviews?/:Rating?/:Total_sales?/:Thirty_day_sales?/:Brand?').get(GetHuntProducts);



module.exports = Router;
