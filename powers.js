var isEven = function(n) {
  return n % 2 === 0;
};

var isOdd = function(n) {
  return !isEven(n);
};

var power = function(x, n) {
  // base case
  if(n === 0) {
    return 1;
  }
  // recursive case: n is negative
  if(n < 0){
    return 1/power(x,n*-1);
  }
  // recursive case: n is odd
  if(isOdd(n)){
    return x*power(x,n-1);
  }
  // recursive case: n is even
  if(isEven(n)){
    var y = power(x,n/2);
    return y*y;
  }

};

console.log(power(2,2))
console.log(power(2,-1))
console.log(power(3,3))