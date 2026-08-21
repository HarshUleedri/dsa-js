function flattenArray(arr) {
  return arr.reduce(
    (acc, crr) =>
      Array.isArray(crr) ? acc.concat(flattenArray(crr)) : acc.concat(crr),
    [],
  );
}
const nestedArray = [1, [2, [3, [4, [5]]]]];

const flatten = flattenArray(nestedArray);
console.log(flatten);
