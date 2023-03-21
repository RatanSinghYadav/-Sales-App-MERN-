const sales = require('../models/userSchema');

async function Total  (req, res){
    try {
        const totalSales = await sales.aggregate([
          {
            $group: {
              _id: null,
              totalAmount: { $sum: "$amount" }
            }
          }
        ]);
        res.status(200).json({ totalSales: totalSales[0].totalAmount });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving total sales amount" });
      }
    };

    module.exports = Total;
