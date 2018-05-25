var palindrome = function (string) {
  // base case
  if (string.length < 2) {
    return true
  }

  if (string[0] === string[string.length-1]) {
    // return palindrome(string.splice(string.length-1,1).splice(0,1))
    return palindrome(string.slice(string.length-1,1).slice(0,1))
  } else {
    return false
  }
}

console.log(palindrome('rotor'))
console.log(palindrome('motor'))
console.log(palindrome('zerorez'))

// console.log(string.substr(string.length-1,1).substr(0,1))