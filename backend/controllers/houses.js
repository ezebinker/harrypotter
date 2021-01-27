//const { allHouses } = require("../models/houses");
const House = require("../models/houses");

const all = (req, res) => {
  res.json(allHouses);
};

const single = (req, res) => {
  res.json({ message: `Buscaste:  ${req.params.id}` });
};

const create = async (req, res) => {
  try {
    const house = new House(req.body);
    const {_id, name} = await house.save();
    res.json({message: "Casa dada de alta", _id, name});
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { all, single, create };
