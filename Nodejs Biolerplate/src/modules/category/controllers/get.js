import {
  DATA_NOT_FOUND,
  GET_DATA_MESSAGE,
  INTERNAL_SERVER_ERR_MESSAGE,
} from "../constant/index.js";
import getServices from "../services/get.js";

const getController = async (req, res) => {
  try {
    const data = await getServices();
    if (data) {
      res.status(200).send({ message: GET_DATA_MESSAGE, data });
    } else {
      res.status(404).send({ message: DATA_NOT_FOUND });
    }
  } catch (error) {
    res.status(404).send({ message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default getController;
