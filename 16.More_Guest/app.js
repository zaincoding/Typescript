var guest_list = ['Usman', 'Ahmed', 'Fawad'];
console.log(guest_list.toString() + ',are invited.\n');
console.log(guest_list[1] + ",is not participating in the invitation.");
console.log("Now..");
guest_list[1] = "Kashan";
var i = 0;
while (guest_list[i]) {
    console.log(guest_list[i] + ", Invited.");
    i++;
}
console.log("\nI found a bigger dinner table.");
guest_list.unshift('Gul_Ahmed');
guest_list.splice(1, 0, "Burhan");
guest_list.push("Haider");
guest_list;
i = 0;
while (guest_list[i]) {
    console.log(guest_list[i]);
    i++;
}
