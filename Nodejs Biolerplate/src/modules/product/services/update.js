import { updateById } from "../db/index.js";

const updateDataServices = async (id, data) => await updateById(id, data);

export default updateDataServices;
