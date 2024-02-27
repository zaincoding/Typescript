

function show_magician(magicians:string[]){
    magicians.forEach(magician => console.log(magician))
}

let magicians = ['Ali Rajput', 'Agha Waqar', 'Mooen', 'David Copperfield', 'Penn & Teller'];


function make_great(magicians:string[]){
    return (magicians.map(magician => `The great ${magician}`));
}
let greatMagician = make_great(magicians.slice());

function make_great_copy(magicians:string[]){
  return (magicians.map(magician => `The Great ${magician}`));
}

show_magician(magicians);
console.log("\n")
show_magician(greatMagician);
console.log("\n")
let UnchangeMagician = make_great_copy(magicians.slice());
show_magician(UnchangeMagician);