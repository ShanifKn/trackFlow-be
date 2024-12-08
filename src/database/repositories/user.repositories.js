import { Users } from "../models/user.model.js";

class UserRepository {
  constructor() { }

  // Method to save a new user
  async saveUser({ firstName, lastName, email, password, bio, branch, role }) {
    const user = await Users.create({ firstName, lastName, email, password, bio, branch, role });
    return user;
  }

  // Method to get a user by ID
  async getUserById({ userId }) {
    const user = await Users.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;

  }

  // Method to get a user by ID
  async getAllUsers() {
    const user = await Users.find();
    if (!user) {
      throw new Error("User not found");
    }
    return user;

  }
  // Method to get a user by ID
  async CountUserByEmail({ email }) {
    const user = await Users.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    return user;

  }

  // Method to update user details
  async updateUser({ userId, firstName, lastName, email, bio, branch, role }) {
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

  }

  // Method to delete a user
  async deleteUser(userId) {
    const deletedUser = await Users.findByIdAndDelete(userId);
    return deletedUser;
  }
}

export default UserRepository;
