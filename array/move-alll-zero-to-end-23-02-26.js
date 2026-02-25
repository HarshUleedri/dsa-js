// const arr = [0, 1, 0, 3, 0, 34, 53, 0, 543, 0, 12];s

function moveAllZeroToEnd(arr) {
  if (arr.length === 0) return null;

  let allZeroAtEnd = [];
  let zero = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      allZeroAtEnd.push(arr[i]);
    } else {
      zero.push(0);
    }
  }

  return [...allZeroAtEnd, ...zero];
}

// const result = moveAllZeroToEnd(arr)
// console.log(result);

// optimize solution
//  time complexity O(n) space compexity O(1)
const arr1 = [0, 0, 3, 5, 0, 7, 0, 12, 13];

function moveZero(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

// console.log(moveZero(arr1));

const arr2 = [1, -2, 3, -4, 5, -6, -7];

function moveNegativeToLeft(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

console.log(moveNegativeToLeft(arr2));
