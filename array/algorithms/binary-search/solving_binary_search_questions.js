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
const arr4 = [1, 3, 5, 6];
const target4 = 2;
function getTheIndexOfTargetToMaintainOrder(arr, target) {
  for (i = 1; i < arr.length; i++) {
    if (target > arr[i - 1] && target < arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

console.log(getTheIndexOfTargetToMaintainOrder(arr4, target4), "question 5");
const arr5 = [3, 8, 12, 17, 25, 31, 42];
const target5 = 25;
function findTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if ((arr[middle] === target)) {
      return middle;
    }

    if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(findTarget(arr5, target5));
