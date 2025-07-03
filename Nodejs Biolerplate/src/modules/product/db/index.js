import Modal from "../models/index.js";

const getAllData = async () => await Modal.find();

// populate use for relationship in DB <<<<<<<<<<<<<<<<<

// const getAllPopulatedData = async (key) =>
//   await Modal.find().populate({
//     path: key,
//     select : "name"
//   });

// =================================

// const getAllPopulatedData = async (key) =>
//   await Modal.find().populate({
//     path: key,
//   });

// ===================================

const getAllPopulatedData = async (key) => await Modal.find().populate(key);

// aggregate DB

const getAggregate = async (q) => await Modal.aggregate(q);

const addData = async (data) =>
  await new Modal(data).save().then((data) => data.toObject());

const deleteById = async (id) => await Modal.findByIdAndDelete(id);
const updateById = async (id, data) => await Modal.findByIdAndUpdate(id, data);

export {
  getAllData,
  addData,
  deleteById,
  updateById,
  getAllPopulatedData,
  getAggregate,
};
