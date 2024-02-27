let Magicians = ['Ali Rajput', 'Agha Waqar', 'Mooen', 'David Copperfield', 'Penn & Teller'];
function showMagicians(Mag:string[]){
   Mag.forEach(Magics =>{
     console.log(Magics)
   });
}
function make_great(Magicians:string[]) {
 for(let i=0; i<Magicians.length; i++){
  console.log( Magicians[i] = "The Great " + Magicians[i]);
 }
}
 
 make_great(Magicians);

showMagicians(Magicians)

