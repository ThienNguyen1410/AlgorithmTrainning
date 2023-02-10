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

const unique = signgleNumberLinear([2, 1, 1, 3, 4, 5, 7, 2, 5, 3, 4]);
console.log(unique);
