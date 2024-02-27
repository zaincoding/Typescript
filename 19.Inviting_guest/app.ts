 let guest_list: string[] = ['Usman','Ahmed','Fawad']
console.log(guest_list.toString()+',are invited.\n');

console.log(guest_list[1] + ",is not participating in the invitation.")

console.log("Now..")

guest_list[1] = "Kashan";

 let j=0;
 while(guest_list[j]){

 console.log(guest_list[j] +", Invited.");
  j++;
}
console.log("\nI found a bigger dinner table.")

guest_list.unshift('Gul_Ahmed');
guest_list.splice(1,0, "Burhan");
guest_list.push("Haider")

 guest_list;

 let n=0;
 while(guest_list[n]){
console.log(guest_list[n]+ ",is invited.")
  n++;
  
 }

console.log("\ni can invite only two people.")


let result:any = "";
 function invited(gst:string[]){
for (let z=0; z< 4;){

 console.log(gst.pop()+",sorry i can't invite you for the dinner.");

 z++;
  }

for (let i=0; i<gst.length;){
 
 console.log((gst[i]+", is invited."));
  i++;
}

for(let i=0; i<gst.length;){
  gst.pop();
  i++;
 console.log("\nRemaining Guests:");
 console.log(guest_list.splice(1,2));

} 

}

 invited(guest_list);
 