import Modal from "../models/index.js";

const getAllData = async () => await Modal.find();

const addData = (data) =>
  new Modal(data).save().then((data) => data.toObject());

const deleteById = async (id) => await Modal.findByIdAndDelete(id);
const updateById = async (id, data) => await Modal.findByIdAndUpdate(id, data);

export { getAllData, addData, deleteById, updateById };
