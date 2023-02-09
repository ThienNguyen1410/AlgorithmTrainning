// Problem : Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight)
// Explain : Hamming Weight that refers the number of set bits in binary number. It measure how many bits in a binary number are set to 1.
// Input : n - a positive integer.
// Output : Returns the number of '1' bits it has.
// Constraints: The input must be a binary string of length 32.
// Example : 00000000000000000000000000001011 => hammingWeight is 3 but decimal is 11.
// Note : If want convert hammingWeight to number : let n = length of number => multiply each set of bit to 2
// => (number * 2^n) + (number * 2^n - 1) => 101 = (1 * 2^2 + 0 * 2^1 + 1 ^ 2 ^0) = 5
// Solution 1 : loop 32 time because input is a binary string of length 32
// 00000000000000000000000000001011 => AND with 1 = 1 => shift 1 bit => counter = 1
// 0000000000000000000000000000101 => AND with 1 = 1 => shift 1 bit => counter = 2
// 000000000000000000000000000010 => AND with 1 = 1 => shift 1 bit => counter = 2
// 00000000000000000000000000001 => AND with 1 = 1 => shift 1 bit => counter = 3
// .... => counter = 3
// O(n) = 0(32) = O(1) because n is an integer
// Solution 2 : Bit Manipulation
//  n    = ... 1 1 0 1 0 0 it != 1 =>
//n-1    = ... 1 1 0 0 0 0
//n&(n-1)= ... 1 1 0 0 0 0 ...
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let counter = 0;
  for (let i = 0; i < 32; i++) {
    counter += n & 1;
    n >>>= 1;
  }

  return counter;
}

function hammingWeightOptimize(n) {
  let counter = 0;
  while (n != 0) {
    counter++;
    n &= n - 1;
  }
  return counter;
}

var result = hammingWeight(11111111111111111111111111111101);
var result1 = hammingWeightOptimize(11111111111111111111111111111101);
console.log("Result ", result);
