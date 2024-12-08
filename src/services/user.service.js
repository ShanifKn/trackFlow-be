import { INCORRECT_OTP } from "../api/constants/errorCodes.js";
import { hashPassword } from "../api/helpers/bcryptHelper.js";
import UserHelper from "../api/helpers/user.helper.js";
import UserRepository from "../database/repositories/user.repositories.js";

class UserService {
  constructor() {
    this.userHelper = new UserHelper();
    this.userRepository = new UserRepository();
  }

  // Method to save a new user
  async saveUser({ firstName, lastName, email, password, bio, branch, role }) {
    // Hash the password before saving
    const hashedPassword = await hashPassword(password);
    
    return await this.userRepository.saveUser({ firstName, lastName, email, password: hashedPassword, bio, branch, role });
  }

  // Method to get a user by ID
  async getUserById({ userId }) {
    try {
      return await this.userRepository.getUserById({ userId });
    } catch (error) {
      throw new Error(`Error saving user: ${error.message}`);
    }
  }

  // Method to get a user by ID
  async getAllUsers() {
    try {
      return await this.userRepository.getAllUsers();
    } catch (error) {
      throw new Error(`Error saving user: ${error.message}`);
    }
  }

  // Method to update user details
  async updateUser({ userId, firstName, lastName, email, bio, branch, role }) {
    try {
      return await this.userRepository.updateUser({ userId, firstName, lastName, email, bio, branch, role });
    } catch (error) {
      throw new Error(`Error saving user: ${error.message}`);
    }
  }
}

export default UserService;
