// - Given
//     - Ascending array, unique elements (can be negative or positive)
//     - A K integer ⇒ K is a index of missing number
// - Return
//     - K missing number in array
// - Example
//     - [4,7,9,10] , k = 1 ⇒ return 5  (Missing numbers[5,6,8] k = 1 ⇒ missing key = 5)
// - Solve
//     - One pass
//          Let's first assume that one has a function missing(idx) that returns how many numbers are missing until the element at index idx
//          Find missing index : missingIdx(idx - 1) < k < missingIdx(idx)
//                            => nums[idx - 1] < kth < nums[idx]
//                            => kth missing = nums[idx -1] + k - missing(idx)
//          Count how many numbers are missing until the element at idx :
//              x = nums[idx] - nums[0] - idx
//                  4            4         0 => 0
//                  7            4         1 => 2  (from 4 => 7 missing 2 elements  )
//                  9            4         2 => 3  (from 4 => 9 missing 3 elements  )
//                  10           4         3 => 3  (from 4 => 10 missing 3 elements )

function missing(idx, nums) {
  return nums[idx] - nums[0] - idx;
}

function onePassMissingElement(k, nums) {
  var n = nums.length;
  // If kth missing number is larger than
  // the last element of the array
  if (k > missing(n - 1, nums)) {
    return nums[n - 1] + k - missing(n - 1, nums);
  }
  // find idx such that
  // missing(idx - 1) < k <= missing(idx)
  var idx = 1;
  while (k > missing(idx, nums)) {
    idx++;
  }
  return nums[idx - 1] + k - missing(idx - 1, nums);
}

function binaryMissingElemnet(k, nums) {
  var n = nums.length;
  var left = 0;
  var right = n - 1;
  let pivot;
  while (left != right) {
    pivot = left + (right - left) / 2;
    if (k > missing(pivot, nums)) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }
  return nums[left - 1] + k - missing(left - 1, nums);
}

const onePassKth = onePassMissingElement(1, [4, 7, 9, 10]);
const binarySearchKth = binaryMissingElemnet(1, [4, 7, 9, 10]);
console.log(onePassKth);
console.log(binarySearchKth);
