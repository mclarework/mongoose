const mongoose = require("mongoose");

const connection = async () => {
  const uri =
    "mongodb+srv://Mike:%23Asmodii1981@practise-cluster-jdtv7.mongodb.net/mikedb?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("connection made");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connection
};
