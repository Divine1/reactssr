const express = require("express");

const React = require('react');
const renderToString = require("react-dom/server").renderToString;
const App = require("./../src/App").default;
const app = express();

app.use(express.static('global'));

const PORT = 3000;
const HOST = "127.0.0.1";

app.get("/",(req,res)=>{
    console.log("in / route")
    let content = renderToString(<App />);
    //res.send({"data" : "in root path"})
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
})

var serverObj = app.listen(PORT,()=>{
    console.log("server started at address ",serverObj.address().address
    ," port ",serverObj.address().port)
})

//574150756