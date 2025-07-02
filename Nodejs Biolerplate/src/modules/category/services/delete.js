import { deleteById } from "../db/index.js";

const deleteServices = async (id) => {
  return await deleteById(id);
};

export default deleteServices;
