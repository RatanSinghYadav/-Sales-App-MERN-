const {Router} = require('express');
const route = Router();
const addData = require('./addData');
const getData = require('./getData');
const Total = require('./total');
const Delete = require('./delete');
const Register = require('./register');
const Login = require('./login');

route.post('/addSale',addData);
route.get('/getSale',getData);
route.get('/total',Total);
route.delete('/deleteData/:id',Delete);
route.post('/register',Register);
route.post('/login',Login);




module.exports = route;