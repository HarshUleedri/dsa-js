const arr = [2, 4, 6, 8, 10, 12];
const target = 8;

function findTheIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findTheIndex(arr, target));

const arr2 = [1, 2, 2, 2, 3, 4];
const target2 = 2;

function findFirstAccurence(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findFirstAccurence(arr2, target2));
