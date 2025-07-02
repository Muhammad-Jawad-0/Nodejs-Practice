import { getAllPopulatedData } from "../db/index.js";

const getDataServices = async () => await getAllPopulatedData("category");

export default getDataServices;
