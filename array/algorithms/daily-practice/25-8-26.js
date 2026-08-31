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

// remove all null and undefined properties

function cleanObject(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result[key] = cleanObject(obj[key]);
    } else if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(
  cleanObject({
    name: "John",
    page: null,
    address: {
      city: "Mumbai",
      pin: null,
      landmark: {
        loc: null,
        base: "cap",
      },
    },
  }),
);

/// invert keys and values of an objects

function invertKeysAndValues(obj) {
  const result = {};

  for (let key in obj) {
    const val = obj[key];
    result[val] = key;
  }

  return result;
}

console.log(invertKeysAndValues({ a: 1, b: 2 }));

const newObject = { name: "Harsh Uleedri" };

Object.defineProperty(newObject, "age", {
  value: 24,
  enumerable: false,
});

console.log(newObject);

const arrReturn = Object.keys(newObject);
console.log(arrReturn, "with out non-enumerable property");
for (let key in arrReturn) {
  console.log(key, "with out non-enumerable property");
}
console.log(
  Object.getOwnPropertyNames(newObject),
  "with non-enumerable property",
);

// reverse the string

const str = "harsh";

console.log(str.split("").reverse().join(""));

let reverseString = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseString += str[i];
}

console.log(reverseString);

// palendrome question

function checkPalindrome(str) {
  const reverse = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() === reverse;
}

console.log(checkPalindrome("mjadam"));

const dupNumbers = [1, 2, 2, 3, 1, 2];

function countApperance() {
  const obj = {};
  for (let val of dupNumbers) {
    obj[val] = obj[val] ? obj[val] + 1 : 1;
  }

  return obj;
}

console.log(countApperance(dupNumbers));

///missing number

function missingNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
}

console.log(missingNumber([1, 2, 3, 5, 6]));

// count vowels

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let val of str) {
    if (vowels.includes(val)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("javascript"));

let arr6 = [1, 2, 3, 4, 2, 5, 6, 3, 7, 2];

function findDuplicate(arr) {
  const newArr = new Set();
  const result = new Set();

  for (let el of arr) {
    if (newArr.has(el)) {
      result.add(el);
    } else {
      newArr.add(el);
    }
  }
  return [...result];
}

console.log(findDuplicate(arr6));

const arr7 = [1, 2, 4, 5, 7];

function findMissingNumber(arr) {
  const result = [];

  for (let i = 0; i < Math.max(...arr); i++) {
    if (!arr.includes(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(findMissingNumber(arr7));

const arr8 = [1, 2, 3, 4, 5, 6];
const arr9 = [4, 5, 6, 7, 8, 9];

function commonElement(arr1, arr2) {
  const set = new Set(arr2);
  const commanArr = new Set();

  for (let el of arr1) {
    if (set.has(el)) {
      commanArr.add(el);
    }
  }
  return [...commanArr];
}

console.log(commonElement(arr8, arr9));

function findIntersection(arr1, arr2) {
  const set = new Set(arr1);

  const result = new Set();

  for (let el of arr2) {
    if (set.has(el)) {
      result.add(el);
    }
  }
  return [...result];
}
console.log(commonElement([1, 2, 2, 3, 4, 5], [2, 2, 4, 6, 7]));

function createUnion(arr1, arr2) {
  const set = new Set(arr1);

  for (let el of arr2) {
    set.add(el);
  }

  return [...set];
}

console.log(createUnion([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

function sortArry(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] >= arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }

  return arr;
}

console.log(sortArry([2, 1, 3, 5, 6, 4]));

function checkAnagrams(str1, str2) {
  for (let str of str2) {
    if (!str1.includes(str)) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagrams("hello", "hh"));
console.log(checkAnagrams("race", "care"));

function optimizeAnagramCheck(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}

console.log(optimizeAnagramCheck("hello", "hhhh"));
console.log(optimizeAnagramCheck("race", "care"));

function findFirstNonRepeating(string) {
  const str = string.toLowerCase();
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return -1;
}

console.log(findFirstNonRepeating("Harsh"));

function sortthenumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] >= arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortthenumber([3, 4, 1, 5, 7, 9, 2]));

function nonReapeating(str) {
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char in count) {
    if (count[char] === 1) {
      return char;
    }
  }
  return -1;
}

console.log(nonReapeating("harsh"));
