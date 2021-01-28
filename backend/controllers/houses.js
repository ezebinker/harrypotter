const House = require("../models/houses");
const { findById, findAll } = require("../services/common");
const { paginationInfo } = require("../services/pagination");

const all = async (req, res) => {
  try {
    const data = await findAll(House);
    const info = paginationInfo({ req, model: House });
    res.json({ info, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error" });
  }
};

const single = async (req, res) => {
  const data = await findById(House, req.params.id);
  res.json(data);
};

const create = async (req, res) => {
  try {
    const house = new House(req.body);
    const { _id, name } = await house.save();
    res.json({ message: "Casa dada de alta", _id, name });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { all, single, create };
