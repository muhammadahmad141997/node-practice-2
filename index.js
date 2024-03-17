const express = require('express');
const user = require('./user');

const app = express();
app.use(express.json());

app.post("/insert", (req, res) => {
    let data = new user(req.body);
    let result = data.save();
    console.log(data);
    res.send(data)
    console.log("sucessfully inserted");
})

app.post("/find",async (req, res) => {
    let data = await user.find(req.body);
    console.log(data);
    res.send(data);
    console.log("sucessfully Find");
})

app.delete("/delete",async (req, res) => {

    let data = await user.deleteOne({"name":req.query.name});
    console.log(data);
    res.send(data);
    console.log("sucessfully deleted");
})

app.post("/update/:name",async (req, res) => {

    let data = await user.updateOne({"name":req.params.name},{$set:req.body});
    console.log(data);
    res.send(data);
    console.log("sucessfully updated");
})



//url param 
//querry params =>
//body
//

app.listen(5000);