// Given : Array of number, unique , and the target number, unsort.
// Return : Index of the 2 number that sum equal target : num1 + num2 = target => [index1, index2]
// Condition : Only one solution for one time complexity and try to less than 0(n^2)
// Example : [2, 7, 11, 15] , target = 9 => [0, 1]
// Solution :
//  Brute Force : Time complexity : 0(n^2), Space complexity(1)
//  Dual Pointers : Time complexity : 0(n) , Space complexity(1) and only use when array sorted
//      Idea : Asign 2 pointer left right at begin and end of array:
//             if(array[left] + array[right] > target) ? left++ : right--
//  Map : Time complexity: 0(n), Space complexity : 0(n)
//      Idea : current + x = target => target - current = x (we need to find it)
//      Use a map to map x with index
//      if(target - current = x and x exist in hash) => return current + x
//

function bruteForce(s, target) {
  var indicates = [];
  for (var i = 0; i < s.length; i++) {
    for (var k = 0; k < s.length; k++) {
      console.log(s[i], s[k]);
      if (i != k && s[i] + s[k] == target) {
        return [i, k];
      }
    }
  }
  return indicates;
}

// Only use when array is sorted
function dualPointer(s, target) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let sum = s[left] + s[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

function useHashMap(s, target) {
  var numMap = {};
  for (let i = 0; i < s.length; i++) {
    const x = target - s[i];
    if (numMap[x] !== undefined) {
      return [i, numMap[x]];
    }
    numMap[s[i]] = i;
  }
  return [];
}

var s = [2, 7, 11, 15];
var target = 18;
// var indicates = bruteForce(s, target);
// var indicates = dualPointer(s, target);
var indicates = useHashMap(s, target);
console.log("Indicates ", indicates);
