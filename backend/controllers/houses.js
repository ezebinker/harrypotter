//const { allHouses } = require("../models/houses");
const House = require("../models/houses");

const all = async (req, res) => {
  try {
    const info = {};
    const data = await findAll();
    info.count = await totalRegister();
    res.status(200).json({data, info});
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error" });
  }
};

const single = async(req, res) => {
  const data = await findById(req.params.id);
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

const totalRegister = async () => await House.countDocuments();
const findById = async () => await House.findById(id);
const findAll = async () => await House.find();

module.exports = { all, single, create };

//llegué hasta el minuto 7 del video 2. 