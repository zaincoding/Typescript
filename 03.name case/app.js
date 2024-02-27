// 3.Name Case: Store a person's name in a variable..
var myname = "Khan ahmed khan";
function titlecase(msg) {
    console.log(msg.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); }).join(' '));
}
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
titlecase(myname);
