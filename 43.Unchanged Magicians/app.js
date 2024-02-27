function show_magician(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = ['Ali Rajput', 'Agha Waqar', 'Mooen', 'David Copperfield', 'Penn & Teller'];
function make_great(magicians) {
    return (magicians.map(function (magician) { return "The great ".concat(magician); }));
}
var greatMagician = make_great(magicians.slice());
function make_great_copy(magicians) {
    return (magicians.map(function (magician) { return "The Great ".concat(magician); }));
}
show_magician(magicians);
console.log("\n");
show_magician(greatMagician);
console.log("\n");
var UnchangeMagician = make_great_copy(magicians.slice());
show_magician(UnchangeMagician);
