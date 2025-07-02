import { UPDATE_MESSAGE } from "../constant/index.js";
import updateServices from "../services/update.js";

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await updateServices(id, req.body);
    res.status(200).send({ status: 200, message: UPDATE_MESSAGE, updatedData });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default updateController;
