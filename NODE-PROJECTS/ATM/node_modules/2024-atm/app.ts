#!/user/bin/env node
import inquirer from "inquirer"

  let myBalance = 500000;
  const myPin = 1214;
  

   let  pinAns = await inquirer.prompt([
    {message:'Enter your pin', name:'pin',type:'number',
    }
   ])

if(pinAns.pin === myPin){
    console.log('Correct pin')


let atmOperation = await inquirer.prompt([
    {message:'Select one of the option', name:'operation',type:'list', 
     choices:['withdraw','Check Balance']
    }
])

if(atmOperation.operation === 'withdraw'){

    let withdraw = await inquirer.prompt([
        {message:'Enter amount', name:'amount', type:'list',
        choices:['5000','10000','30000']
        }
    ])
    let deduction = withdraw.amount

     myBalance -=deduction
     console.log(`Amount deducted: ${deduction}. \nYour remaining Balance: ${myBalance} PKR`)



}


if(atmOperation.operation === 'Check Balance'){

console.log(`Your current balance: ${myBalance} PKR`)
}

}else{
    console.log("Wrong pin number.")
}