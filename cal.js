$(document).ready(function() {
//click function
$("button").click(function(e) {
//picks up the ID of the item clicked on this. Store 
current = this.value;
//Store each value as a string in a variable
memory = memory +current;
console.log(memory);
//Append string display
  $("#window").text(memory);
});
 
});


//multiply function(a, b) {
//    a * b

// }

// //divide function(a, b) {
//  return a / b
// }

// //plus function(a, b) {
//   return 
// }

// //minus function

var memory ='';
var current = '0';
var operation;
var maxLength = 30;

// if (current > maxLength) {
//   return "Too Long"
// }