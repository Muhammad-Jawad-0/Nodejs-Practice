import { getAllData } from "../db/index.js";

const getServices = async () => {
  return getAllData();
};

export default getServices;
