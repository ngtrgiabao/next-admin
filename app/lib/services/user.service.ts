import { UserModel } from "../models/user.model"
import { connectToDB } from "../utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await UserModel.find();    
    return users;
  } catch (error) {
    console.log(["FETCH_USERS"], error);
    throw new Error("Failed to fetch users");
  }
}