$(document).ready(function() {
  //click function
  $("button").click(function(e) {
      //picks up the ID of the item clicked on this. Store 
      current = this.value;
      //Store each value as a string in a variable
      memory = memory + current;
      // console.log(memory);
      //Append string display
      $("#window").text(memory);
      // when an operation button is pressed, push memory to array
      if (this.value == 'x' || this.value == '-' || this.value == '+' || this.value == '/') {
        array.push(parseFloat(memory));
        //clear memory
        memory = "";

        array.push(this.value);
      console.log(array);
      } else if (this.value == '=') {
        array.push(memory);
        console.log(array)
      //   equation = array.join("");
      //   total = eval(equation);
      //   console.log(total);
      }
      // make array into a string


  });

});
var total = '';
//Stores each memory so we can do math later
var array = [];
// Memory stores string of numbers pressed
var memory = '';
// Current stores each value pressed
var current = '0';
var operation = [];
var maxLength = 30;
var equation = "";

// if (current > maxLength) {
//   return "Too Long"
// }