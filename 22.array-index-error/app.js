var tp = ['Car', 'Bike', 'Bicycle', "Moterbike"];
//Accessing index 5 which is out of bond.
var indexoutOfBond = tp[5];
//this will never be reached because the error accours above.
console.log(indexoutOfBond);
//here you can access an index that may or may not of bound.
var indextoAccess = 5; //here you can change the index number. 
if (indextoAccess < tp.length) {
    console.log(tp[indextoAccess]);
}
else {
    console.log("Index out of bond.");
}
