const register = require('../models/userSchema1');
// const bcrypt = require('bcrypt')

async function Login (req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  // Find the user with the given email
  const user = await register.findOne({ email:"rahul@gmail.com"});
  console.log(user);

  // If no user is found, return an error
  if (!user) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  // Check if the password is correct
  const result = req.body.password === user.password;
   console.log(result);
  // If the password is incorrect, return an error
  if (!result) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  // If the email and password are correct, return a success message
  res.send({ message: 'Logged in successfully' });
};


module.exports = Login;