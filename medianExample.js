// find the median element between two sorted arrays [1, 5, 8, 9 ] and
// [2, 3, 7, 10]

const median = (left, right) => {
  const A = []

  const length = left.length + right.length
  let i = 0
  let j = 0

  for (let k = 0; k < length; k++) {

    if (left[i] <= right[j]) {
      A[k] = left[i]
      i = i + 1
    } else {
      A[k] = right[j]
      j = j + 1
    }

  }

  if (length % 2 != 0) {
    return A[Math.floor(length/2)]
  } else {
    return (A[length/2 - 1] + A[length/2])/2
  }

}

console.log(median([1, 5, 8, 9 ],[2, 3, 7, 10]))
console.log(median([1, 5, 8, 9, 11 ],[2, 3, 7, 10]))
// 1,2 3,5,7,8,9,10,11
//         -