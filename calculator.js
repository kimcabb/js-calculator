//calculator object
var calculator = {
//create Addition method
  add: function(num1,num2){
    console.log(num1 + num2);
  },
//create Subtraction method
  subtract: function(num1,num2){
    console.log(num1 - num2);
  },
//create Multiplication method
  multiply: function(num1,num2){
    console.log(num1 * num2);
  },
//create Division method
  divide: function(num1,num2){
      console.log(num1 / num2);
  },
//create Exponents method (look up math object)
  exponent: function(base,exp){
      console.log(Math.pow(base,exp));
  },
//create an operation of your choice!
  modulus: function(num1,num2){
      console.log(num1 % num2);
  }
}
