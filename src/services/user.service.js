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
    const hashedPassword = await hashPassword(password)
    return await this.userRepository.saveUser({ firstName, lastName, email, password: hashedPassword, bio, branch, role });
  }

  // Method to get a user by ID
  async getUserById({ userId }) {
    return await this.userRepository.getUserById({ userId })
  }

  // Method to get a user by ID
  async getAllUsers() {
    return await this.userRepository.getAllUsers()
  }

  // Method to update user details
  async updateUser({ userId, firstName, lastName, email, bio, branch, role }) {
    return await this.userRepository.updateUser({ userId, firstName, lastName, email, bio, branch, role })
  }

}

export default UserService;
