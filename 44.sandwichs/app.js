function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwitch ingredients");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("* " + item);
    }
}
make_sandwich("Cheese", "Mayonnaise", "Mustard", "Pickles");
make_sandwich("Tomato", "Turkey", "Lettuce");
make_sandwich("Bread", "Bacon");
