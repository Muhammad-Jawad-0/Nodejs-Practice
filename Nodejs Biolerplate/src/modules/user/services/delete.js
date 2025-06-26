import { deleteById } from "../db/index.js";

const deleteDataServices = async (id) => await deleteById(id);

export default deleteDataServices;
