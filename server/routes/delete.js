const sales = require('../models/userSchema');

async function Delete  (req, res) {
    try {
        const { id } = req.params;
        const newData = await sales.findByIdAndDelete({ _id: id });
        res.status(200).json(newData);
    } catch (error) {
        res.status(422).json(error);
    }

}

module.exports = Delete;