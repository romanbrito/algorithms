// fibonacci series

const fibonacci = n => {
  if (n < 3) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}


// console.log(fibonacci(9))

// 0,0 >55
// 0,21 > 34
// 13,21 > 21
// 13,13 > 13
// 8,13 > 8
// 8,16 > 5---
// 10,16 > 3
// 10,15 > 2
// 9,15 > 1
// 9,15 > 1