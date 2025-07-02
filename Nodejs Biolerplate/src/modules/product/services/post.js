import { addData } from "../db/index.js";

const postService = async (data) => {
  return await addData(data);
};

export default postService;
