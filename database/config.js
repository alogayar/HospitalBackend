const mongoose = require("mongoose");

const dbConnetion = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONECTION
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
