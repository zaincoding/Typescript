import inquirer from "inquirer";

const answer = await inquirer.prompt([

  {message:"Enter the year.", type:"number", name:"year"}
])
const {year} = answer;

const leapYear:number = year % 4;
if(leapYear === 0){
 console.log("This year is a leap year.")
}
else if(leapYear){
      console.log("This year is not a leap year")
}else{
      console.log("Enter a valid number.")
}
