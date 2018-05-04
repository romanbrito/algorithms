/*
  Write a bubble sort here
  Name the function bubbleSort

  If you want to suspend running the unit tests, change describe to xdescribe

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.

*/


// function bubleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//
//     for (var j = 0; j < arr.length; j++) {
//       var temp = null
//
//       if (arr[i] < arr[j]) {
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//
//     }
//
//   }
//
//   return arr
// }

function bubbleSort(arr) {
  do {

    var swapped = false

    for (var i = 0; i < arr.length; i++) {
      var temp = null

      if (arr[i] > arr[i+1]) {
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }

    }

  } while (swapped)

  return arr
}
console.log(bubbleSort([5, 2, 6, 1, 0,3,4,7]))