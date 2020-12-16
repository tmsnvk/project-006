import { MongoClient } from "mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local.");
// }

// if (!process.env.MONGODB_DB) {
//   throw new Error("Please define the MONGODB_DB environment variable inside .env.local.");
// }

let cached = global.mongo;
if (!cached) cached = global.mongo = {};

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(process.env.MONGODB_URI, opts)
      .then((client) => {
        conn.client = client;
        return client.db(process.env.MONGODB_DB);
      })
      .then((db) => {
        conn.db = db;
        cached.conn = conn;
      })
  }

  await cached.promise;
  return cached.conn;
};