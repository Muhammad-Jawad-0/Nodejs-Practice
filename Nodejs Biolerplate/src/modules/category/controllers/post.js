import { ADD_DATA_MESSAGE, INTERNAL_SERVER_ERR_MESSAGE } from "../constant/index.js";
import postServices from "../services/post.js";

const postController = async (req, res) => {
  try {
    const data = await postServices(req.body);
    res.status(200).send({ status: 200, message: ADD_DATA_MESSAGE, data });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: INTERNAL_SERVER_ERR_MESSAGE, error });
  }
};

export default postController;
