const express = require('express');
const user = require('./user');

const app = express();
app.use(express.json());

app.post("/insert", (req, res) => {
    let data = new user(req.body);
    let result = data.save();
    console.log(data);
    res.send(data);
    console.log("sucessfully inserted");
})

app.post("/find",async (req, res) => {
    let data = await user.find(req.body);
    console.log(data);
    res.send(data);
    console.log("sucessfully Find");
})

app.delete("/delete/:_id",async (req, res) => {

    let data = await user.deleteOne(req.params);
    console.log(data);
    res.send(data);
    console.log("sucessfully deleted");
})

app.post("/update:data",async (req, res) => {
    let data = await user.updateOne(req.params,{$set:req.body});
    console.log(data);
    res.send(data);
    console.log("sucessfully updated");
})

app.listen(5000);