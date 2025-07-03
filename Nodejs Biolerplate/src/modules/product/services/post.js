import { addData } from "../db/index.js";

const postService = async (data) => await addData(data);

export default postService;
