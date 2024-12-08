import UserService from "../../services/user.service.js";
import { tryCatch } from "../../utils/index.js";
import { LoginRateLimiter } from "../middlewares/apiLimiter.js";
import ExistCheck from "../validations/existCheck.js";
import { SchemaValidationForLogin, SchemaValidationForUser } from "../validations/schema.validation.js";
import Validate from "../validations/validator.js";

const UserRouter = (app) => {
  const userExists = new ExistCheck();
  const service = new UserService();

  // @route   GET /
  // @des     For health check
  // @access  Public
  app.get(
    "",
    tryCatch(async (req, res) => {
      return res.status(200).json("Running");
    })
  );

  //@route create user/
  //@des  Create new user
  //@access public
  app.post(
    "/signup",
    LoginRateLimiter,
    Validate,
    tryCatch(async (req, res) => {
      const { email, password } = req.body;

      //Check if user already exists with given email and role
      await userExists.ForSignup({ email });

      const { message } = await service.CreateUser({ email, password });

      return res.status(200).json({ message });
    })
  );

  // POST route to add a new user
  app.post('/add-user', SchemaValidationForUser, Validate, tryCatch(async (req, res) => {
    const { firstName, lastName, email, password, bio, branch, role } = req.body;
    console.log(firstName, lastName, email, password, bio, branch, role)
    const user = await service.saveUser({ firstName, lastName, email, password, bio, branch, role })
    res.status(201).json({ message: 'User added successfully' });

  }));

  // GET route to fetch a user by ID
  app.get("/user/:id", tryCatch(
    async (req, res) => {

      const userId = req.params.id;
      const user = await service.getUserById({ userId });
      res.status(200).json({ message: "User fetched successfully", data: user });

    }
  ));

  // GET route to fetch a user by ID
  app.get("/list", tryCatch(
    async (req, res) => {
      try {
        const user = await service.getAllUsers();
        res.status(200).json({ message: "User fetched successfully", data: user });
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  ));

  // PUT route to update user details
  app.patch("/user/update", SchemaValidationForUser, Validate, tryCatch(
    async (req, res) => {

      const { userId, firstName, lastName, email, bio, branch, role } = req.body;
      const updatedUser = await service.updateUser({
        userId,
        firstName,
        lastName,
        email,
        bio,
        branch,
        role,
      });
      res.status(200).json({ message: "User updated successfully", data: updatedUser });
    }
  ));
};

export default UserRouter;
