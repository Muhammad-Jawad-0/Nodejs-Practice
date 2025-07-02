import jwt from "jsonwebtoken";
import ENV from "../constants/index.js";

const authAuthentication = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(403)
        .send({ status: 403, message: "UnAuthurized User" });
    } else {
      const token = authorization.split(" ")[1];
      jwt.verify(token, ENV.JWT_SECRET, (error, decoded) => {
        if (decoded) {
          res
            .status(200)
            .send({ status: 403, message: "User Fetched", result: decoded });
          next();
        } else {
          res.status(403).send({ status: 403, message: "Invalid Token", error });
        }
      });
    }
  } catch (error) {
    return res.status(500).send({ status: 500, error });
  }
};
export { authAuthentication };
