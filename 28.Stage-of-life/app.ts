let ages =   [1,2,4,13,20,65]

function checkAge(age:number) {
  if (age < 2){
    console.log  ("The person is a baby.")
  }else{
    console.log  ("The person is not a baby.")
  }

  if(age == 2 && age < 4 ){
    console.log("The person is a toodler.")
  }else{
    console.log  ("The person is not a toodler.")

  }
  if (age == 4 && age < 13){
    console.log("The person is a kid.")
  }else{
    console.log  ("The person is not a kid.")

  }
  if (age == 13 && age < 20){
    console.log("The person is a teenager.")
  }else{
    console.log  ("The person is not a teenager.")

  }

  if (age == 20 && age < 65){
    console.log("The person is an adult.")
  }else{
    console.log  ("The person is not an adult.")

  }
  if(age == 65 || age > 65){
    console.log("This person is an elder.")
  }else{
    console.log  ("The person is not an elder.")

  }
}

ages.find(checkAge);
