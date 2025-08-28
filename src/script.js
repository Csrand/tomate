// Function definitions
function washDish(){
console.log("Washing dish");
console.log("Finished washing dish");
  dryDish();
}
function dryDish() {
console.log("Drying dish");
storeDish();
console.log('Finished drying dish');
}

function storeDish(){
console.log("Storing dish");
}
// Calling the main function
washDish();
