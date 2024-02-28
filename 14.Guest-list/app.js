var Guest_list = ['Usman', 'Ahmed', 'Fawad'];
var text = "";
var i = 0;
while (Guest_list[i]) {
    text += Guest_list[i] + ",you are invited for the dinner.\n";
    i++;
}
console.log(text);
