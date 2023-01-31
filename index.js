// Requirements
const express = require("express");
const path = require("path");

// Setting Up Express
const app = express();
const server = require("http").createServer(app);
app.use(express.json({extended: false}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));

// Redirections
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname + '/views/index.html'));
});

server.listen(5001, () => {
    console.log("Server is listening on 5001");
})




