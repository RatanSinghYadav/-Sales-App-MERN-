const mongoose = require('mongoose');

const url = "mongodb+srv://ratan:1234@cluster0.b8ycfbh.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url, {
    dbName: 'sales_database',
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }).then(() => {
    console.log('Connected successfully to server');
  })
  .catch((err) => {
    console.log('Error connecting to server', err);
  });
