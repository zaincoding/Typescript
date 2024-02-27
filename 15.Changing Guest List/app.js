var guest_list = ['Usman', 'Ahmed', 'Fawad'];
var new_list = [];
console.log(guest_list.toString() + ',are invited.\n');
console.log(guest_list[1] + ",is not participating in the invitation.");
guest_list[1] = "Kashan";
console.log("Now..");
var i = 0;
while (guest_list[i]) {
    console.log(guest_list[i] + ", Invited.");
    i++;
}
