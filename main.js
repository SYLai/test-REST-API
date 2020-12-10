var app = require("express")();
var mysql = require("mysql");

var con = mysql.createConnection( {
    host : "localhost",
    user : "root",
    password : "",
    database : "msgdb"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("connected to database");
    //date = new Date();
    //console.log(date.toISOString().slice(0,19).replace('T',' '));
})

//msg constructor
var msg = {
    sender : '',
    receiver : '',
    timeSent : '',
    title : '',
    message: ''
};

app.get("/", (req, res) => res.send(msg));
app.listen(3000, () => console.log("Server listening on port 3000"));