//fint largest number in the array

function getLargestNumber(arr) {
  let currentLargeNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (currentLargeNumber < arr[i]) {
      currentLargeNumber = arr[i];
    }
  }
  return currentLargeNumber;
}

// console.log(getLargestNumber([1, 3, 4, 6, 7, 3, 41, , 5, 3]));

// fint smallest number in the array

function getSmallestNumber(arr) {
  let currentSmallestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (currentSmallestNumber > arr[i]) {
      currentSmallestNumber = arr[i];
    }
  }
  return currentSmallestNumber;
}
// console.log(getSmallestNumber([1, 3, 4, 6, 7, 3, 41, , 5, 3]));

function getSumOfAllElement(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getSumOfAllElement([1, 3, 4, 6, 7, 3, 41, 5, 3]));

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
console.log(getAverage([1, 3, 4, 6, 7, 3, 41, 5, 3]));

function getEvenAndOddCount(arr) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { evenCount, oddCount };
}

console.log(getEvenAndOddCount([1, 3, 4, 6, 7, 3, 41, 5, 3]));
