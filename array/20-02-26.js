// find the largest and smallest number in an array

const arr = [3, 4, 54, 6, 52, 2];

// largest

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

// smallest
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

// find both min and max in one for loop inside function

const getMinAndMaxNumber = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
};

const data = getMinAndMaxNumber(arr);
console.log(data);
