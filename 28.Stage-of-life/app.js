var ages = [1, 2, 4, 13, 20, 65];
function checkAge(age) {
    if (age < 2) {
        console.log("The person is a baby.");
    }
    if (age == 2 && age < 4) {
        console.log("The person is a toodler.");
    }
    if (age == 4 && age < 13) {
        console.log("The person is a kid.");
    }
    if (age == 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    if (age == 20 && age < 65) {
        console.log("The person is an adult.");
    }
    if (age == 65 || age > 65) {
        console.log("This person is an elder.");
    }
}
ages.find(checkAge);
