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

console.log(arr2)


