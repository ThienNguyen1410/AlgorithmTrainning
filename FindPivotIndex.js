// Level : Easy
// Input   : Array of integer (positive and negative)
// Return  : The left most pivot's INDEX of this array , if no such index return -1
// Explain :
//     - The pivot index is the index of number that all number on the left = right
// Example :
//     - [1,7,3,6,5,6]
//              ^
//             pivot
//     - 1+7+3 =  5 + 6 = 11 => 6 is the pivot number and 3 is the pivot index
//  Sovle :
// Dual pointer will not work for this
// => Condition =
//Keyword :  right = total - left
function findPivotIndex(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - leftSum - nums[i]) {
      console.log(nums[i]);
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

const pivot = findPivotIndex([1, 7, 3, 6, 5, 6]);
