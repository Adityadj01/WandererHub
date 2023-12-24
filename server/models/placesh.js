const mongoose= require('mongoose')
const placeschema= new mongoose.Schema({
    pname: {
        type: String,
    },
        pprice:{
        type: Number,
        required: true,
        },
        ticno:{
            type:Number,
            required: true,
        },
        pdate:{
            type: Date,
        },
        ptime: {
            type: Date,
        }

});
const place = mongoose.model("place", placeschema);
module. exports = place;