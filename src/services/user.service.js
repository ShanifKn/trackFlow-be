import { INCORRECT_OTP } from "../api/constants/errorCodes.js";
import UserHelper from "../api/helpers/user.helper.js";

class UserService {
  constructor() {
    this.userHelper = new UserHelper();
  }
}

export default UserService;
