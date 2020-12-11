class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

var userList = [];

const createUser = (username, password) => {
    let user = new User(username, password);
    userList.push(user);
}

const findUser = (searchname) => {
    userList.forEach(function (username, i, array) {
        if (searchname == username){
            return userList[i];
        }
    })
}

module.exports = { 
    userList : userList,
    createUser : createUser,
    findUser : findUser
}