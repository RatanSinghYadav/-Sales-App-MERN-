const sales = require('../models/userSchema');

module.exports = async function Register(req, res) {
    console.log(req.body)
    const { saleId,name,qty,amount } = req.body;

    if (!saleId || !name || !qty || !amount ) {
        res.status(422).json("plz fill the require field.");
    }
    try {
        const preUser = await sales.findOne({ saleId: saleId });

        if (preUser) {
            res.status(422).json("this user is already present");
        } else {
            const addUser = new sales({
                saleId,name,qty,amount
            });
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch (error) {
        res.status(422).json(error)

    }
};