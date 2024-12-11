// Modify an Array Stored in an Object  - https://www.youtube.com/watch?v=1g8e39QWZzw

let users = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: [
            "Sam",
            "Kira",
            "Tomo"
        ],
    },
    location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
    }
};

function addFriend(userObj, friend) {
    console.log("The friends", userObj.data.friends);
    let currentFriends = userObj.data.friends;

    currentFriends.unshift(friend);

    return currentFriends;
    
}

console.log(addFriend(users, 'Pete'));
