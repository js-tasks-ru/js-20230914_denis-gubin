/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const partParts = path.split(".");
  let currentIndex = 0;

  return function deepIntoObj(obj) {
    if (typeof obj !== 'object') {
      return obj;
    }

    if (currentIndex > partParts.length - 1) {
      return {};
    }

    const currentKey = partParts[currentIndex];
    currentIndex += 1;

    deepIntoObj(partParts.shift());
    return deepIntoObj(obj[currentKey]);
  };
}
