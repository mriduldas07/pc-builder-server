const { default: mongoose } = require("mongoose");
const app = require("./app");

let server;
const PORT = process.env.PORT || 5000;

async function main() {
    try {
      await mongoose.connect(
        "mongodb+srv://mriduldas0325:nX6tDu1cgg3mQQAz@cluster0.sngccsm.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log("Database connected");
      server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  main();