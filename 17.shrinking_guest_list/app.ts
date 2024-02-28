 let guest_list: string[] = ['Usman','Ahmed','Fawad']

 for(let i=0; i<guest_list.length; i++){
   console.log(`${guest_list[i]} is invited.`)
}
console.log(guest_list[1] + ",is not participating in the invitation.")

console.log("Now..")

guest_list[1] = "Kashan";

 let i=0;
 while(guest_list[i]){

 console.log(guest_list[i] +", Invited.");
  i++;
}
console.log("\nI found a bigger dinner table.")

guest_list.unshift('Gul_Ahmed');
guest_list.splice(1,0, "Burhan");
guest_list.push("Haider")

 guest_list;

  i=0;
 while(guest_list[i]){
console.log(guest_list[i]+ ",is invited.")
  i++;
  
 }

console.log("\ni can invite only two people.")


let result:any = "";
 function invited(gst:any){
for (let i=0; i< 4;){

 console.log(gst.pop()+",sorry i can't invite you for the dinner.");

 i++;
  }

for (let i=0; i<gst.length;){
 
 console.log((gst[i]+", is invited."));
  i++;
}

for(let i=0; i<gst.length;){
  gst.pop();
  i++;
  console.log(guest_list.splice(0,0))

} 

 }

 invited(guest_list);
 
