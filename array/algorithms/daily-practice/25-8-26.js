const arr = [1, 2, 3, 4];

const reverseArr = [];

for (let el of arr) {
  reverseArr.unshift(el);
}

console.log(reverseArr);

/// with out using extra array

const arr2 = [1, 2, 3, 4, 5];

let left = 0;
let right = arr2.length - 1;

while (left < right) {
  let temp = arr2[left];
  arr2[left] = arr2[right];
  arr2[right] = temp;

  left++;
  right--;
}

console.log(arr2);

//question 2 flatten nested arr

const arr3 = [1, [2, [3, 4], 5]];

function flatten(arr) {
  let flattenArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === "object") {
      flattenArr = [...flattenArr, ...flatten(arr[i])];
    } else {
      flattenArr.push(arr[i]);
    }
  }

  return flattenArr;
}

console.log(flatten(arr3), "flatten array");

//optimize version

function optiFlatten(arr) {
  const result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...optiFlatten(el));
    } else {
      result.push(el);
    }
  }
  return result;
}

console.log(optiFlatten(arr3), "opti flatten array");

//remove duplicate
const arr4 = [1, 2, 2, 3, 4, 4, 5];

const arrSet = new Set(arr4);

console.log(arrSet);

//without using Set

function removeDuplicateElements(arr) {
  const result = [];
  for (let el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(removeDuplicateElements(arr4), "removed duplicate");
