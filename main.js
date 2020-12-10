var app = require("express")();
var mysql = require("mysql");
w   
const test = {
    sender : 'senderId',
    receiver : 'receiverId',
    date : 'sentDate',
    title : 'msgTitle',
    message: 'msg'
};

app.get("/", (req, res) => res.send(test));
app.listen(3000, () => console.log("Server listening on port 3000"));