// Given : 2 string, s , t
// Return : True or False
// Example : string s : ace and string t : ahbgdc => true
// Idea : Dual Pointer : a c e | a h b g d c
//                       ^       ^
//              leftPointer      rightPointer
//              Condition : if s[leftPointer] == t[rightPointer] => leftPointer++
//                          rightPointer++;
//              Return : leftPointer == s.length
// Because we're trying to match the characters in the subsequence s with the characters in the string t.
// If leftPointer has reached the end of s, that means we have found all the characters in s in the same order in t, and we can return true.
function isSubsequence(s, t) {
  let leftPointer = 0,
    rightPointer = 0;
  var leftBound = s.length;
  var rightBound = t.length;
  while (leftPointer < leftBound && rightPointer < rightBound) {
    if (s[leftPointer] == t[rightPointer]) {
      leftPointer++;
    }
    rightPointer++;
  }
  return leftPointer == leftBound;
}
