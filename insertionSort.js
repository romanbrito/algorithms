/*
  Insertion sort!

  Be sure to call your function insertionSort.

  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.

  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!

  And you put xdescribe instead of describe if you want to suspend running the unit tests.
*/

function insertionSort(arr) {

  for (var i = 1; i < arr.length; i++) {


    for (var j = 0; j < i; j++) {
      if ( arr[i] < arr[j] ) {
        var spliced = arr.splice(i,1)
        arr.splice( j, 0, spliced[0])
      }

    }
    
  }

  return arr

}

const insertionSortBook = A => {

  for (let j = 1; j < A.length; j++) {
    let key = A[j]
    let i = j - 1
    while ( i > -1 && A[i] > key )  {
      A[i + 1] = A[i]
      i = i - 1
    }
    A[i + 1] = key
  }
  return A
}

// console.log(insertionSort([5, 2, 4, 6, 1,3]))

console.log(insertionSortBook([5, 2, 4, 6, 1,3]))