// Assuming you have two arrays with string data
let users = ["Zahid", "Aman", "Waqas", "Usman"];
let new_users = ["Zahid", "aman", "Waqas", "kashan","zafar"];

// Initialize an array to store common elements
let commonElements = [];
let commonElement1:any = [];


for(let i=0; i<new_users.length; i++){
  if(users.includes(new_users[i])){
  commonElements.push("\nUser name already exist, "+new_users[i]);
  }
}  
for(let i=0; i<new_users.length; i++){
   if(!users.includes(new_users[i])){
     commonElement1.push("\nThe username is avaliable, "+new_users[i])
   }
}


console.log(commonElements.toString());
console.log(commonElement1.toString());