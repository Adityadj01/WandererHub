const mongoose= require('mongoose')
const usersschema= new mongoose.Schema({
    usere: {
        type: String,
        unique: true 
    },
    passw:{
        type: String,
    }
    
});
const users = mongoose.model("users", usersschema);
module. exports = users;