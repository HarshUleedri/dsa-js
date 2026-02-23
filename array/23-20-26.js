// find the second smallest

const arr = [3, 7, 2, 9, 5];

function findSecondSmallestNumber(arr) {
  if (arr.length === 0) {
    console.log("array is empty");
    return;
  }
  if (arr.length === 1) {
    console.log("Second smallest number is not there.");
    return;
  }

  let smallestNumber = Infinity;
  let secondSmallNumber = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      secondSmallNumber = smallestNumber;
      smallestNumber = arr[i];
    } else if (arr[i] > smallestNumber && arr[i] < secondSmallNumber) {
      secondSmallNumber = arr[i];
    }
  }
  return secondSmallNumber;
}

const result = findSecondSmallestNumber(arr);
console.log("second smallest number",result);

// find the second largest number

function findSecondLargestNumber(arr) {
  if (arr.length === 0) {
    console.log("array is empty");
  }
  if (arr.length === 1) {
    console.log("there is no second largest number");
  }

  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] < largestNumber && arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  // console.log(largestNumber);
  return secondLargestNumber;
}

const result2 = findSecondLargestNumber(arr);

console.log("second largest number",result2);
