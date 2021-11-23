const mongoose = require("mongoose");

const dbConnetion = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://DJ12571J:FSsr3sxj9XYxYjAp@cluster0.5wkvo.mongodb.net/test"
    );

    console.log('conectado')

  } catch (error) {
      console.log(error);
      throw new Error('Error al conectar')
  }
};

module.exports = {
  dbConnetion
};
