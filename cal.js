$(document).ready(function() {
  //click function
  $("button").click(function(e) {
    //picks up the ID of the item clicked on this. Store 
      current = this.value;
    if (current == '=') {
      equation = array.join("");
      total = eval(equation);
      console.log(total);
      $("#window").text(total);
    } else if (current == 'AC') {
      memory = '';
      array = [];
      $('#window').text('0');
      console.log(array);                           
    } else {
      memory = memory + current;
      $("#window").text(memory);
      array.push(current);
    }

  }); // Closes button

}); // Closes document



var total = '';
//Stores each memory so we can do math later
var array = [];
// Memory stores string of numbers pressed
var memory = '';
// Current stores each value pressed
var current = '0';
var maxLength = 30;
var equation = "";
var reset = 0;
// if (current > maxLength) {
//   return "Too Long"
// }