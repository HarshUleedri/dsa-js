const arr = [1, 3, 4, 6, 3, 8, 5, 2, 5, 6];

function findFirstAccurence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(findFirstAccurence(arr, 3));

function findAllAccurence(arr, target) {
  let indexOfAccurence = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexOfAccurence.push(i);
    }
  }
  return indexOfAccurence;
}

console.log(findAllAccurence(arr, 3));

function countFrequencyOfElement(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

console.log(countFrequencyOfElement(arr, 3));

function findLastAccurence(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findLastAccurence(arr, 3));

function checkExistence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
console.log(checkExistence(arr, 3));
