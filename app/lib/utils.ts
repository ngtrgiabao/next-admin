import mongoose from "mongoose";
import { Global } from "../helpers/constants/global";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(Global.DATABASE_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to connect db");
  }
};