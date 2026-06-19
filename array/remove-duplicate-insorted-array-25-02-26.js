const arr1 = [1, 1, 2, 2, 3, 4, 4];

function removeDuplicate(arr) {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] === arr[i]) {
      arr.splice(i, 1);
      j++;
    }
  }
  return arr;
}

// console.log(removeDuplicate(arr1));

// optimized solution



function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0; // last unique element index

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1; // new length
}

const arr = [1, 1, 2, 2, 3, 4, 4];
const newLength = removeDuplicates(arr);

console.log("New length:", newLength);
console.log("Modified array:", arr.slice(0, newLength));
