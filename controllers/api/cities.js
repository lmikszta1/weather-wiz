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
    const cities = await City.find({user: req.user._id});
    res.json(cities);
}

async function deleteCity(req, res){
    try{
        const city = await City.findByIdAndDelete(req.params.cityId)
        if(!city){
            return res.status(404).json({error: "City not found"})
        }
        res.json({message: 'City deleted successfully'})
    } catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    createCity,
    index,
    deleteCity,
};
