import Modal from "../models/index.js";

const addData = async (data) =>
  await new Modal(data).save().then((data) => data.toObject());

const getAllData = async () => await Modal.find();

const deleteById = async (id) => await Modal.findByIdAndDelete(id);

const updateById = async (id, data) => await Modal.findByIdAndUpdate(id, data);

export { addData, getAllData, deleteById, updateById };
