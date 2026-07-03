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

const arr3 = [1, 2, 2, 2, 3, 4];
const target3 = 2;
function findLastAccurence(arr, target) {
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findLastAccurence(arr3, target3));

function findAccurence(arr, target) {
  const accrence = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      accrence.push(arr[i]);
    }
  }
  return accrence.length;
}

console.log(findAccurence(arr3, target3));
