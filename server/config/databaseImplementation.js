const mongoose 			 = require('mongoose');
const configDB = require('./databaseCreds');

mongoose.connect(configDB.url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
}).then(res => {
        console.log(`DB Connected! ${res}`)
}).catch( err => {
  console.log(Error, err.message);
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

