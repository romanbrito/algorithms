// quick sort
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums
  }

  const pivot = nums[nums.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  // const sortedLeft = quickSort(left)

  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort([5, 2, 6, 1, 0,3,4,7]))
console.log(quickSort([4, 5, 2, 6, 1, 0,3,4,7]))

// [5, 8, 1 , 2]
// 1.
// pivot = 2
// 2. for
// A[i} = A[0] = 5 not < pivot = 2
// right = [ 5 ]
// 8 => right = [5, 8]
// 1 => left = [1] return

// 1, 2, fnRight ...
           //... pivot = 8
           // 5 => left = [5] return
           // [5, 8]

// => 1,2,5,8


















