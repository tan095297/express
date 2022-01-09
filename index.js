require('dotenv').config({ path:'./config.env'});
const express  = require('express');
const bodyParser  = require('body-parser');
const cors  = require('cors');
const res = require('express/lib/response');
const req = require('express/lib/request');
const port = process.env.PORT || 4002 ;

const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

const productRoute = require("./routes/productRoute");
const employeeRoute = require("./routes/employeeRoute");
app.use("/product",productRoute);
app.use("/employee",employeeRoute);



//Routing Table
// app.get("/",(req, res)=>{
//     res.send("Hello from index");
// });

// app.get("/login",(req, res)=>{
//     res.send("Hello from login");
// });

// app.post("/register",(req, res)=>{
//     console.log(req.body.name);
//     console.log(req.body.email);
//     res.send("Hello from register");
// });

// app.get("/product/:id",(req,res)=>{
//     res.send(`Product ID : ${req.params.id}`);
// });

// app.get("/product/:name",(req,res)=>{
//     res.send(`Product name : ${req.params.id}`);
// });




//app.post();
// app.put();
// app.patch();
// app.delete();

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});



