function add(x, y) {
    return x + y;
  }
  
  function sub(x, y) {
    return x - y;
  }
  
  function multi(x, y) {
    return x * y;
  }
  
function div(x, y) {
    if (y === 0) {
        return NaN; // Correct behavior when dividing by zero
    }
    return x / y;
    }
  
  module.exports = { add, sub, multi, div };
  