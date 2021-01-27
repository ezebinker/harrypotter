const moongose = require("mongoose");

const dbConnection = async () => {
  try {
    await moongose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("BD ONLINE");
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = { dbConnection };
