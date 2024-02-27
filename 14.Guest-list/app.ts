
let  Guest_list: string[] =['Usman','Ahmed','Fawad'];

let text = "";
let i=0;
while(Guest_list[i]){

   text += Guest_list[i] + ",you are invited for the dinner.\n";
i++;

console.log(text);
}