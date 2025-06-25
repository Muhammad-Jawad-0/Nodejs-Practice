import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const checkPass = bcrypt.compareSync(password, user.password);
      console.log(checkPass, "<<<< checkPass ");
      if (checkPass) {
        let token = jwt.sign({ email: user.email }, process.env.JWT);
        res.status(200).send({
          status: 200,
          user,
          message: "User Login Succesfull",
          loginToken: token,
        });
      } else {
        res.status(401).send({ status: 401, message: "Password Incorrect" });
      }
    } else {
      res.status(404).send({ status: 404, message: "User Not Found" });
    }
  } catch (error) {}
};

export default loginUser;
