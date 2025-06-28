import {
  ADD_FILE_MESSAGE,
  INTERNAL_SERVER_ERR_MESSAGE,
} from "../constants/index.js";
import uploadFile from "../services/upload.js";

const uploadController = async (req, res) => {
  try {
    const file = await uploadFile(req.file);
    res
      .status(200)
      .send({ status: 200, message: ADD_FILE_MESSAGE, url: file.url });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default uploadController;
