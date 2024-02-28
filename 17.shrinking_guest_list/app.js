var guest_list = ['Usman', 'Ahmed', 'Fawad'];
for (var i_1 = 0; i_1 < guest_list.length; i_1++) {
    console.log("".concat(guest_list[i_1], " is invited."));
}
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
    console.log(guest_list[i] + ",is invited.");
    i++;
}
console.log("\ni can invite only two people.");
var result = "";
function invited(gst) {
    for (var i_2 = 0; i_2 < 4;) {
        console.log(gst.pop() + ",sorry i can't invite you for the dinner.");
        i_2++;
    }
    for (var i_3 = 0; i_3 < gst.length;) {
        console.log((gst[i_3] + ", is invited."));
        i_3++;
    }
    for (var i_4 = 0; i_4 < gst.length;) {
        gst.pop();
        i_4++;
        console.log(guest_list.splice(0, 0));
    }
}
invited(guest_list);
