import { updateById } from "../db/index.js";


const updateServices = async (id , data) => {
  return await updateById(id , data)
};

export default updateServices;
