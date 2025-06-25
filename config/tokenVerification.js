import jwt from "jsonwebtoken";
import "dotenv/config";

const tokenVerification = (req, res, next) => {
  try {
    if (req.headers?.authorization) {
      const token = req.headers?.authorization?.split(" ")[1];
      var decoded = jwt.verify(token, process.env.JWT);
      if (decoded) {
        next();
      } else {
        res.status(403).send({ status: 403, message: "UnAuthorized Token" });
      }
    } else {
      res.status(403).send({ status: 403, message: "Token Not Provided" });
    }
  } catch (error) {
    res.status(500).send({ status: 500, message: "UnAuthorized Token" });
  }
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzYWRAZ21haWwuY29tIiwiaWF0IjoxNzUwODg0NzU0fQ.yKPOB3ehr24MjOvP851xJsEECiWF5ElQlrZ1GXQTieQ
export default tokenVerification;
