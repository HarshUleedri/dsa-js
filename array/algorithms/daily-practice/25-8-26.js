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

// find the second largest element

const arr5 = [10, 5, 20, 8];

function findSecondLargest(arr) {
  const sort = arr.sort((a, b) => a - b);
  return sort[sort.length - 2];
}

console.log(findSecondLargest(arr5), "second largest");

//optimized way

function optimizeFindSecondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let el of arr) {
    if (el > largest) {
      second = largest;
      largest = el;
    } else if (el < largest && el > second) {
      second = el;
    }
  }
  return { largest, second };
}

console.log(
  optimizeFindSecondLargest(arr5),
  "optimize way for finding second largest ",
);

// find the intersection in both array

function findTheIntersection(arr1, arr2) {
  const result = [];

  for (let el of arr1) {
    if (arr2.includes(el)) {
      result.push(el);
    }
  }

  return result;
}

console.log(findTheIntersection([1, 2, 3], [2, 3, 4]), "intersection");

/// deepfreeze the object

const obj = {
  name: "John",
  address: {
    city: "Mumbai",
    location: {
      country: "India",
    },
  },
};

function deepFreeze(obj) {
  Object.freeze(obj);

  for (let val of Object.keys(obj)) {
    if (
      typeof obj[val] === "object" &&
      obj[val] !== null &&
      !Object.isFrozen(obj[val])
    ) {
      deepFreeze(obj[val]);
    }
  }
  return obj;
}
const newObj = deepFreeze(obj);

newObj.address.city = "navi mumbai";

console.log(newObj, "deep freezer");

function createCloneObj(obj) {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

const clonedObj = createCloneObj(obj);
clonedObj.name = "harsh uleedri";

console.log(obj, clonedObj);

// merge 2 object without object.asign and spread operator

function deepMerge(obj1, obj2) {
  let result = {};

  for (let el in obj1) {
    result[el] = obj1[el];
  }

  for (let el in obj2) {
    if (
      typeof result[el] === "object" &&
      result[el] !== null &&
      typeof obj2[el] === "object" &&
      obj2[el] !== null
    ) {
      result[el] = deepMerge(result[el], obj2[el]);
    } else {
      result[el] = obj2[el];
    }
  }
  return result;
}
console.log(
  deepMerge(
    {
      name: "John",
      address: {
        city: "Mumbai",
        pin: 400001,
      },
    },
    {
      age: 25,
      address: {
        city: "Delhi",
      },
    },
  ),
);

/// create a function which behave like Object.entries()

const obj3 = {
  name: "Harsh Uleedri",
  age: 24,
};

function getEntries(obj) {
  const result = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

console.log(getEntries(obj3), "result");
console.log(Object.entries(obj3), "for testing");

// return all keys with the number values only

function getNumberValuedKey(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result.push(key);
    }
  }
  return result;
}
console.log(
  getNumberValuedKey({
    name: "John",
    age: 25,
    salary: 50000,
    city: "Mumbai",
    isActive: true,
  }),
);
