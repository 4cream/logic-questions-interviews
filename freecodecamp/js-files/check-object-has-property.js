// Check if an Object has a Property - https://www.youtube.com/watch?v=S08t6oz00Ew

const users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: false
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    let everyone = ["Alan", "Jeff", "Sarah", "Ryan"];

    for(let i = 0; i < everyone.length; i++) {
        let student = everyone[i];
        if(obj.hasOwnProperty(student) === false){
            return false;
        }
    }

    return true;
};

console.log(isEveryoneHere(users));

/* ----------------------------------------------- */

// function countOnline(usersObj) {
//     let onlineUsers = 0;

//     for(let user in usersObj) {
//         console.log(user);
//         if(usersObj[user]["online"]) {
//             onlineUsers += 1;
//         }
//     }

//     return onlineUsers;
// }

// console.log(countOnline(users));

function countOnline(usersObj) {
    let onlineUsersAmmount = 0;
    let onlineUsers = [];

    for(let user in usersObj) {
        
        if(usersObj[user]["online"]) {
            console.log(user);
            
            onlineUsersAmmount += 1;
            onlineUsers.push(user);
        }
    }

    return {onlineUsersAmmount, onlineUsers};
}

console.log(countOnline(users));
