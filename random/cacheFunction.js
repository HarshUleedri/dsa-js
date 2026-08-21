function memoize(fun) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("from cache for", n);
      return cache[n];
    }

    const result = fun(n);
    cache[n] = result;
    return result;
  };
}
const sum = (n) => n * 2;

const memoizedFun = memoize(sum);

console.log(memoizedFun(4));
console.log(memoizedFun(4));
