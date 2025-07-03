import { getAllPopulatedData, getAggregate } from "../db/index.js";

// const getDataServices = async () => await getAllPopulatedData("category");
const getDataServices = async () => await getAggregate([
    {
        $match:{
            
        }
    }
]);

export default getDataServices;
