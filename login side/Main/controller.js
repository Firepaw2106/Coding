
function getUser(userId){
    return model.data.users.find(user => user.userId == userId);
}

function getUserByUserName(username){
    return model.data.users.find(user => username == username);
}