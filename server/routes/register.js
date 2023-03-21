const register = require('../models/userSchema1');

// create API data

module.exports = async function Register(req, res) {
    console.log(req.body)
    const { fname,lname, email, password } = req.body;

    if (!fname || !lname || !email || !password) {
        res.status(422).json("plz fill the require field.");
    }
    try {
        const preUser = await register.findOne({ email: email });

        if (preUser) {
            res.status(422).json("this user is already present");
        } else {
            const addUser = new register({fname,lname, email, password});
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch (error) {
        res.status(422).json(error)

    }
};



