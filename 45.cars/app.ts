
function cars(manufacturer:string, model:string, color:string, year?:number){
const Car:{manufacturer:string, model:string,color:string, year?:number}={
       manufacturer:manufacturer,
       model:model,
       color:color
}
 if(year !== undefined){
   Car.year = year;
 }
   return Car;
}

 const model1 = cars("Ford","Mustang","Black")
 const model2 = cars("Toyota","Camery", "White", 2022)
 const model3 = cars("Tesla","Model S", "Red")

 console.log(model1)
 console.log(model2)
 console.log(model3)