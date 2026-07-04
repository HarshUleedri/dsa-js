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
  let itration = 0;
  while (left <= right) {
    itration++;
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return { middle, itration };
    }

    if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return { result: -1, itration };
}

console.log(findTarget(arr5, target5));
console.log(findTarget([1, 3, 5, 7, 9, 11], 5));
console.log(findTarget([10, 20, 30, 40, 50], 60));
console.log(findTarget([], 60));

function firstAccWithBS(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  let ans = -1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (arr[middle] === target) {
      ans = middle;
      last = middle - 1;
    } else if (arr[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }

  return ans;
}

console.log(firstAccWithBS([2, 4, 4, 4, 6, 8], 4));

function lastAccWithBs(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  let ans = -1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (arr[middle] === target) {
      ans = middle;
      first = middle + 1;
    } else if (arr[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return ans;
}

console.log(lastAccWithBs([2, 4, 4, 4, 6, 8], 4));

function findTheInsertionIndex(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  let ans = -1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return first;
}
console.log(findTheInsertionIndex([1, 3, 5, 6], 5));
