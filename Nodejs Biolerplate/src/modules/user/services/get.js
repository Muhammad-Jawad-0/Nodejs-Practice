import { getAllData } from "../db/index.js";

const getDataServices = async () => await getAllData();

export default getDataServices;
