import { getAllPopulatedData } from "../db/index.js";

const getDataServices =  () =>  getAllPopulatedData("category");

export default getDataServices;
