var guest_list = ['Usman', 'Ahmed', 'Fawad'];
for (var i_1 = 0; i_1 < guest_list.length; i_1++) {
    console.log("".concat(guest_list[i_1], ", is invited."));
}
console.log(guest_list[1] + ",is not participating in the invitation.");
guest_list[1] = "Kashan";
console.log("Now..");
var i = 0;
while (guest_list[i]) {
    console.log(guest_list[i] + ", Invited.");
    i++;
}
