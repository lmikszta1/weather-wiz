const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        name: {
        type: String,
        required: true,
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("City", citySchema);
