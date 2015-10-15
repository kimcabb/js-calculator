var calc = {
  value: 0,
  add: function(addend){
    this.value += addend;
    this.showValue();
  },
  subtract: function(subtrahend){
    this.value -= subtrahend;
    this.showValue();
  },
  multiply: function(multiplier){
    this.value *= multiplier;
    this.showValue();
  },
  divide: function(divisor){
    this.value /= divisor;
    this.showValue();
  },
  exponentiate: function(exponent){
    this.value = Math.pow(this.value, exponent);
    this.showValue();
  },
  clear: function(){
    this.value = 0;
    this.showValue();
  },
  showValue: function(){
    console.log( "====================")
    console.log( "Current value: " + this.value);
    console.log( "====================")
  }
};

calc.showValue();
