arr = [2, 4, 6, 8, 10, 12];
target = 8;

function findTheIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findTheIndex(arr, target));
