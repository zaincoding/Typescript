function make_sandwich(...items:any){
  
   console.log("Sandwitch ingredients")
   for(let item of items){
      console.log("* "+ item)
   }
}
make_sandwich("Cheese","Mayonnaise","Mustard","Pickles")
make_sandwich("Tomato","Turkey","Lettuce")
make_sandwich("Bread","Bacon")

