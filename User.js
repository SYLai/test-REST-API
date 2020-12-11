/*const mysql = require("mysql");

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
*/
userList = [] //use mysql database

const createUser = (username, password) => {
    var user = [username, password];
    userList.push(user);
}

const findUser = (searchname) => {
    for (i = 0; i < userList.length; i++){
        if (userList[i][0] == searchname){
            return userList[i];
        }
    }
    return []
}

module.exports = { 
    createUser : createUser,
    findUser : findUser
}