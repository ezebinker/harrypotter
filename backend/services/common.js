const totalRegister = async (Model) => await Model.countDocuments();
const findById = async (Model, id) => await Model.findById(id);
const findAll = async (Model) => await Model.find();

module.exports = { totalRegister, findById, findAll };
