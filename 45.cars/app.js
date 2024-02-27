function cars(manufacturer, model, color, year) {
    var Car = {
        manufacturer: manufacturer,
        model: model,
        color: color
    };
    if (year !== undefined) {
        Car.year = year;
    }
    return Car;
}
var model1 = cars("Ford", "Mustang", "Black");
var model2 = cars("Toyota", "Camery", "White", 2022);
var model3 = cars("Tesla", "Model S", "Red");
console.log(model1);
console.log(model2);
console.log(model3);
