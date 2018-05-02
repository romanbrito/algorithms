function basicRecursion(max, current) {
  if (current > max) return;
  console.log(current)
  basicRecursion(max, current + 1)
}

// basicRecursion(5,1)

function fibonacci(n) {
  if (n <= 2) {
    return 1
  } else {
    return fibonacci(n-1) + fibonacci(n -2)
  }
}

// elegant but expensive, might try loop instead


for (var i = 0; i < 21; i++) {
  console.log(`${i}. ${fibonacci(i)}`)
}

// (4)
// f3 + f2
//  f2 + f1 + 1 = 3

// (5)
// f4 + f3
// f3 f2  f2 f1
// f2 f1 f2 f2 f1 = 5

// (6)
// f5 f4
// f4 f3 f3 f2
// f3 f2 f2 f1 f2 f1 f2
// f2 f1 f2 f2 f1 f2 f1 f2 = 8