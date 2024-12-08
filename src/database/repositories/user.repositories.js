import { Users } from "../models/user.model.js";

class UserRepository {
  constructor() {}

  // Method to save a new user
  async saveUser({ firstName, lastName, email, password, bio, branch, role }) {
    return await Users.create({ firstName, lastName, email, password, bio, branch, role });
  }

  // Method to get a user by ID
  async getUserById({ userId }) {
    try {
      const user = await Users.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }

  // Method to get a user by ID
  async getAllUsers() {
    try {
      const user = await Users.find();
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }
  // Method to get a user by ID
  async CountUserByEmail({ email }) {
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }

  // Method to update user details
  async updateUser({ userId, firstName, lastName, email, bio, branch, role }) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        userId,
        { firstName, lastName, email, bio, branch, role },
        {
          new: true, // Return the updated document
          runValidators: true, // Validate the updated data against schema
        }
      );
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Method to delete a user
  async deleteUser(userId) {
    try {
      const deletedUser = await Users.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

export default UserRepository;
