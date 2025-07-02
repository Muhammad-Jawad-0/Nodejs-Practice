import { addData } from "../db/index.js";

const postServices = async(data) => {
    return await addData(data)
};

export default postServices;
