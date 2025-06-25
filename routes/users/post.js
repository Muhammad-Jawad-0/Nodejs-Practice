import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const postUser = async (req, res) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({ ...req.body, password: hashPassword });
    await user.save();
    if (user) {
      let token = jwt.sign({ email: user.email }, process.env.JWT);
      res.status(200).send({ status: 200, user, loginToken: token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, error: error });
  }
};

export default postUser;
