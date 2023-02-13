// Given : Array of number, unique , and the target number
// Return : Index of the 2 number that sum equal target : num1 + num2 = target => [index1, index2]
// Condition : Only one solution for one time complexity and try to less than 0(n^2)
// Example : [2, 7, 11, 15] , target = 9 => [0, 1]
// Solution : Brute Force :
function twoSum(s: Array<number>, target: number): Array<number> {
  var indicates: Array<number> = [];
  for (let i = 0; i < s.length; i++) {
    for (let k = 0; k < s.length; i++) {
      if (i != k && s[i] + s[k] == target) {
        return [k, i];
      }
    }
  }
  return indicates;
}
const s = [2, 7, 11, 15];
const target = 0;
const indicates = twoSum(s, target);
console.log("Indicates ", indicates);
