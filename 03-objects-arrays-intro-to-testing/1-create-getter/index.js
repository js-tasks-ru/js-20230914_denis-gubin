/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
function createGetter(path) {
  const partParts = path.split(".");
  let currentIndex = 0;

  return function deepIntoObj(obj) {
    if (obj === null || obj === "undefined" || (currentIndex > partParts.length - 1) || (typeof obj !== 'object')) {
      currentIndex = 0;
      return obj;
    }

    const currentKey = partParts[currentIndex];
    currentIndex += 1;

    return deepIntoObj(obj[currentKey]);
  };
}

const getter = createGetter('a.b');

console.log(getter({ a: null }));
console.log(getter({ a: { b: { c: {} }}}));
console.log(getter({ a: { b: { c: null }}}));

console.log(getter(getter({ a: { b: 42 }})));
console.log(getter(getter({ a: { b: 42 }})));
