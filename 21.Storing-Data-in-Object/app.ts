// Define the Book type
type Book = {
    name:string;
    price:number;
};
// Define Book1 object
const Book1:Book ={
    name: "Typescript",
    price: 1500,
}
// Define Book2 object
const Book2: Book = {
     name: "Python",
     price: 2000,
}
// Access the price property of Book1
const price = Book1.price;

//printing book details
console.log(Book1.name + `,book price: ${price}`);
console.log(Book2.name + ",book price: " + Book2.price);