import {
  DELETE_MESSAGE,
  INTERNAL_SERVER_ERR_MESSAGE,
} from "../constants/index.js";
import deleteDataServices from "../services/delete.js";

const deleteController = async (req, res) => {
  try {
    const {id} = req.params
    await deleteDataServices(id);
    res.status(200).send({ status: 200, message: DELETE_MESSAGE });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default deleteController;
