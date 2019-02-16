const express = require("express");

const React = require('react');
const renderToString = require("react-dom/server").renderToString;
const App = require("./../src/App").default;
const app = express();
const PORT = 3000;
const HOST = "127.0.0.1";

app.get("/",(req,res)=>{
    console.log("in / route")
    let content = renderToString(<App />);
    //res.send({"data" : "in root path"})
    res.send(content);
})

var serverObj = app.listen(PORT,()=>{
    console.log("server started at address ",serverObj.address().address
    ," port ",serverObj.address().port)
})

//574150756