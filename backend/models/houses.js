/*const allHouses = {
    info: { count: 1, prev: null, next: null},
    data: [
        {
            _id: 1,
            name: "Gryffindor",
            headMaster: "Minerva McGonagall", 
            ghost: "Sir Nicholas",
            thumbnail: "Fotito",
            colors: ["Rojo", "Bordo"],
            animal: "Lion",
            founder: "Godric Gryffindor"
        }
    ]
}

module.exports = {allHouses}; */

const { Schema, model } = require("mongoose");

const HouseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    headMaster: {
        type: String,
        required: true
    },
    ghost: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    colors: {
        type: String,
        required: true
    },
    animal: {
        type: String,
        required: true
    },
    founder: {
        type: String,
        required: true
    },

});

module.exports = model("House", HouseSchema); //Crea una colección House que implementa HouseSchema