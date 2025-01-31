import mongoose from "mongoose";
<<<<<<< HEAD
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
};

export default connectDB;
=======

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB
>>>>>>> 59053e4181cd34daa9e80c4ce053ffcad6f6b3ed
