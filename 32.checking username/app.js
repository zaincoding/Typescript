// Assuming you have two arrays with string data
var users = ["Zahid", "Aman", "Waqas", "Usman"];
var new_users = ["Zahid", "aman", "Waqas", "kashan", "zafar"];
// Initialize an array to store common elements
var commonElements = [];
var commonElement1 = [];
for (var i = 0; i < new_users.length; i++) {
    if (users.includes(new_users[i])) {
        commonElements.push("\nUser name already exist, " + new_users[i]);
    }
}
for (var i = 0; i < new_users.length; i++) {
    if (!users.includes(new_users[i])) {
        commonElement1.push("\nThe username is avaliable, " + new_users[i]);
    }
}
console.log(commonElements.toString());
console.log(commonElement1.toString());
