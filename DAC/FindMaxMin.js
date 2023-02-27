// Given : An array of ints, unsort , positive
// Return : Max and min of that array.
// Example : [70, 250, 50, 80, 140, 12, 14] => return 12 and 250
// Solution : Divede of conquer => devide array to 2 sub-problems are find max and findmin

function findMax(array, index, length) {
  let max;

  if (length - 1 == 0) {
    return array[index];
  }
  if (index >= length - 2) {
    if (array[index] > array[index + 1]) {
      return array[index];
    } else {
      return array[index + 1];
    }
  }
  max = findMax(array, index + 1, length);
  console.log("index : ", index);
  console.log("max : ", max);
  if (array[index] > max) {
    return array[index];
  } else {
    return max;
  }
}

function findMin(array, index, length) {
  let min;
  if (index == length - 1) {
    return array[index];
  }
  if (index >= length - 2) {
    if (array[index] > array[index + 1]) {
      return array[index + 1];
    } else {
      return array[index];
    }
  }
  min = findMin(array, index + 1, length);
  console.log("index : ", index);
  console.log("min : ", min);
  if (array[index] < min) {
    return array[index];
  } else {
    return min;
  }
}

function findMaxMin(array) {
  const l = array.length;
  max = findMax(array, 0, l);
  min = findMin(array, 0, l);
  console.log("MAX : ", max);
  console.log("MIN : ", min);
}

const array = [70, 250, 50, 80, 140, 12, 14];
findMaxMin(array);
