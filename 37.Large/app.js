function make_shirt(size, message) {
    if (size === void 0) { size = ' Small\n'; }
    if (message === void 0) { message = '\nMAKE MOVE\nOR\nLOSE CHANCE\n'; }
    console.log("Size:" + size, "MESSAGE:" + message);
}
make_shirt();
make_shirt("Large\n", "\nI LOVE\nTYPESCRIPT.\n");
make_shirt("Medium\n", "\nONE DAY\nYOU'LL\nKNOW\nMY NAME.");
