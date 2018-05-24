/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  To read the approach, refer to the class materials at
  https://btholt.github.io/four-semesters-of-cs/

  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working

  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums
  }
  const length = nums.length
  const middle = Math.floor(length / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle, length)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return results.concat(left,right)
  // same as
  // return [...results, ...left, ...right]

  // or
  // while (left.length) {
  //   results.push(left.shift())
  // }
  //
  // while (right.length) {
  //   results.push(right.shift())
  // }
  // return results

}

// merge sort book

// merge sort

const mergeBook = (left, right) => {

  const arr = []

  const length = left.length + right.length

  let i = 0
  let j = 0

  for (let k = 0; k < length; k++) {

    if (typeof left[i] === 'undefined') {
      arr[k] = right[j]
      j = j + 1
    } else if (typeof right[j] === 'undefined') {
      arr[k] = left[i]
      i = i + 1
    } else if ( left[i] <= right[j]) {
      arr[k] = left[i]
      i = i + 1
    } else {
      arr[k] = right[j]
      j = j + 1
    }

  }


  return arr

}

const mergeSortBook = A => {

  if (A.length < 2) {
    return A
  }

  const length = A.length
  const middle = Math.floor(A.length/2)

  const left = A.slice(0,middle)
  const right = A.slice(middle, length)

  const mergeSortLeft = mergeSortBook(left)
  const mergeSortRight = mergeSortBook(right)

  console.log('left ' + mergeSortLeft)
  console.log('right ' + mergeSortRight)

  return mergeBook(mergeSortLeft, mergeSortRight)


}


console.log(mergeSort([5, 2, 6, 1, 0,3,4,7]))
console.log(mergeSortBook([5, 2, 6, 1, 0,3,4,7,9]))

// [5, 8, 1 , 2]
// left => 5,8
// right => 1,3
// mergeSort [5,8] => left = 5 right 8
// mergeSort [1,3] => left = 1 right 3
//
// 8 => right = [5, 8]
// 1 => left = [1] return

// 1, 2, fnRight ...
//... pivot = 8
// 5 => left = [5] return
// [5, 8]

// => 1,2,5,8
