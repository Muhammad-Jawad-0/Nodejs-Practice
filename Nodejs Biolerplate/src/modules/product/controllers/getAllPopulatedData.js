import {
  GET_DATA_MESSAGE,
  INTERNAL_SERVER_ERR_MESSAGE,
} from "../constants/index.js";
import getAllPopulatedServices from "../services/getAllPopulatedServices.js";

const getAllPopulatedController = async (req, res) => {
  try {
    const users = await getAllPopulatedServices();
    res
      .status(200)
      .send({ status: 200, message: GET_DATA_MESSAGE, data: users });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default getAllPopulatedController;
