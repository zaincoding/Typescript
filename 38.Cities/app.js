function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("City: ".concat(city, ", Country: ").concat(country, ", ").concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("Barcelona");
//describe_city("Karachi\n", "Pakistan","\nstatment");
