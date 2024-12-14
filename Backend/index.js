const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.listen(port,()=> {
    console.log(`app is listening to port ${port}`);
});

app.get("/register",(req,res)=> {
    let { user, password} = req.query;
    res.send(`Standard GET Response. Welcome ${user} and your password is ${password}`)
});

app.post("/register",(req,res)=> {
    let { user, password} = req.body;
    console.log(req.body);
    res.send(`Standard POST Response. Welcome ${user}`)
});