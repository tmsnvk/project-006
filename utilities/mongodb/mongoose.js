import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  const db = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;