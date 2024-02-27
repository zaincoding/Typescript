// 3.Name Case: Store a person's name in a variable..
let myname = "Khan ahmed khan"

function titlecase(msg:string){
    console.log(msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' '));
}

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
titlecase(myname);