import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL ||
        "mongodb+srv://Nishant-R:cMVSc6ePV6V4dr03@cluster0.rembes2.mongodb.net/CRUD",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connection;
