const sales = require('../models/userSchema');


// get API Data

module.exports = async function getData(req, res) {
    try {
        const userData = await sales.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch (error) {
        res.status(422).json(error);
    }
}