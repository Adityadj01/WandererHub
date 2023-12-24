const express = require("express");
const mongoose= require('mongoose');
const cors = require("cors")
const app = express();

const usersmodule = require("./models/users");
const placemodule = require("./models/placesh");
app.use(express.json());
app.use(cors());
mongoose.connect(' MongoDB database link ', {
    useNewUrlParser: true,
});

app.post("/insert", async(req,res) => {
    const usere=req.body.usere;
    const passw=req.body.passw;
    const users = new usersmodule({usere:usere, passw: passw});
    const pdate=req.body.pdate;
    const ptime=req.body.ptime;
    const pname= req.body.pname;
    const pprice=req.body.pprice;
    const ticno=req.body.ticno;
    const place = new placemodule({ pprice: pprice,ticno:ticno,pdate: pdate,ptime: ptime,pname:pname});
    try
    { 
        await users.save(); 
        await place.save(); 
    }
    catch(err)
    {
        console.log(err);
    }
});

app.listen (3001, ()=>{
    console.log('server running on port 3001');
});
