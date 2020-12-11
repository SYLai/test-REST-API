const app = require("express")();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const user = require("/User");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//testing use only, to be removed
const secret = crypto.randomBytes(64).toString('hex'); 

var con = mysql.createConnection( {
    host : "localhost",
    user : "root",
    password : "",
    database : "msgdb"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("connected to database");
})

//msg 
var msg = {
    sender : "",
    recipient : "",
    time_sent : "",
    title : "",
    messege : ""
};

//generate token
function generateToken(username){
    return jwt.sign(username, secret, {expiresIn : '24h'});
}

//homepage
app.get("/", (req, res) => res.send(msg));
//list messages
app.get("/messages", function (req, res) {
    con.query("SELECT * FROM messages", function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});
//send messages
app.post("/messages", function (req, res){
    date = new Date();
    //assign values to msg
    msg = {
        sender : req.body.sender,
        recipient : req.body.recipient,
        time_sent : date.toISOString().slice(0,19).replace('T',' '), //convert js date to mysql datetime format
        title : req.body.title,
        message : req.body.message
    };

    //create new table row
    con.query("INSERT INTO messages SET ?", msg, function(err, result){
        if (err) throw err;
        res.send(result);
    });
    
});

//view message
app.get("/messages/:msgId", function (req, res) {
    con.query("SELECT * FROM messages WHERE id =?", [req.params.msgId], function(err, result){
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send("Message id " + req.params.msgId + " does not exist");
        }
        
    })
})

//register user
app.post("/register", function (req, res) {
    //hash the password
    hashPwd = crypto.createHash("sha256");


})

//listening to port 3000
app.listen(3000, () => console.log("Server listening on port 3000"));