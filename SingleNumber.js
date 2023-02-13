// Input : Nums array
// Constraint : Non-empty, can contain duplicate number.
// Output : The unique number not, duplicate
// Example : [2,2,1] => 1
// Example : [4,1,2,1,2] => 4
// Solution :
//           O(n^2) : For loop 2 time , first loop take the numsber, sencond loop take
//           Condition : i === j => continue => go to next loop => ensure that not compare 1 number 2 times
//
//           O(n) : use XOR operator, so that init a temp (here is result) with 0 and compare, if 2 nums duplicate , xor = 0
//           A | B | A XOR B
//           0 | 0 |   0
//           0 | 1 |   1
//           1 | 0 |   1
//           1 | 1 |   0

function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      // Make sure that not compare nums[i] with it self
      // Setting j = 1 instead of j = 0 at the beginning of the loop will not give the correct result for the input [2, 2, 1] because it will only compare the current number nums[i] with the elements that come after it in the array, but it will not compare it with the elements that come before it. This means that if the number that appears only once is located before the current number nums[i], it will not be detected and the result will be incorrect.
      // For example, let's say we have the input [2, 2, 1]:
      // When i = 0, j = 1. The algorithm will compare nums[0] (2) with nums[1] (2) and find that they are equal. Since they are equal, the algorithm will set single = false and move on to the next iteration of the outer loop.
      // When i = 1, j = 2. The algorithm will compare nums[1] (2) with nums[2] (1) and find that they are not equal. Since they are not equal, the algorithm will set single = true and return nums[1] (2), which is not the correct answer.
      // The correct answer is 1, which is the only number in the array that appears only once. However, the algorithm will not detect this because it only compares the current number nums[i] with the elements that come after it in the array, but not with the elements that come before it.
      if (i === j) {
        continue;
      }

      if (nums[i] === nums[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return nums[i];
    }
  }
}

function signgleNumberLinear(nums) {
  let result = 0;
  for (const num of nums) {
    console.log(`${num} XOR with ${result}`);
    result ^= num;
    console.log("Result : ", result);
  }
  return result;
}
const nums = [2, 1, 1, 3, 4, 5, 7, 2, 5, 3, 4];
const nums1 = [2, 2, 1];
// const unique = signgleNumberLinear([2, 1, 1, 3, 4, 5, 7, 2, 5, 3, 4]);
const unique = singleNumber(nums1);
console.log(unique);
