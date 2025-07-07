import { getAllPopulatedData, getAggregate } from "../db/index.js";

// const getDataServices = async () => await getAllPopulatedData("category");
const getDataServices = (query) => {
  const { pageSize, pageNumber } = query;

  const skip = (pageNumber - 1) * pageSize;
  return getAggregate([
    // {
    //   $match: {
    //     title: {
    //       $in: ["book"],
    //     },
    //   },
    // },
    // {
    //   $skip: Number(skip),
    // },
    // {
    //   $limit: Number(pageSize),
    // },

    {
      $facet: {
        data: [{ $skip: Number(skip) }, { $limit: Number(pageSize) }],
        totalCount: [{ $count: "total" }],
      },
    },
  ]);
};

export default getDataServices;
