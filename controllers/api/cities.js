const City = require("../../models/city");

async function createCity(req, res) {
    try {
        const city = await City.create(req.body);
        res.json(city);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function index(req, res) {
    const cities = await City.find({});
    res.json(cities);
}

module.exports = {
    createCity,
    index,
};
