let num = 5 + 5 == 10;
console.log("Is 5 + 5 = 10, I predict True.")
console.log(5+ 5 == 10)
console.log("Is 5 + 5 != 10, I predict Fasle.")
console.log(5+5 != 10)

let num1 = 10 < 20;
console.log("Is 10 < 20, I predict True.")
console.log(10 < 20)
console.log("Is 10 > 20, I predict True.")
console.log(10 > 20 );

console.log("Is 10 > 20, I predict True True.")
console.log(10>=5)
console.log("Is 10 > 20, I predict False False.")
console.log(10<=5)

let name1 = 'myname';
let pass  = 'mypass';

console.log("Is name1 = myname and pass = mypass I predict True.")
console.log(name1 == 'myname' && pass == 'mypass')

console.log("Is name1 != myname and pass = mypass I predict Fasle.")
console.log(name1 != 'myame' && pass != 'mypass')

console.log("Is name1 = myname or pass = mypass I predict True.")
console.log(name1 == 'myname' || pass =='pass')

console.log("Is name1 = name and pass = pass I predict False.")
console.log(name1 == 'name' || pass =='pass')


let mylist:string[] = ['Laptop','Smartphone','Camera','Game Console']

let i = mylist.indexOf("Camera");

if(mylist[i] == 'Camera'){
    console.log("The condition is True.");
}
else{
    console.log("The condition is false.")
}

if(mylist[i] != 'Camera'){
    console.log("The condition is true.");
}
else{
    console.log("The condition is false.")
}