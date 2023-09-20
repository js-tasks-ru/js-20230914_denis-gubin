/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let partParts = path.split(".");

  return function deepIntoObj(obj) {
    if (typeof obj !== 'object') {
      return obj;
    }

    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length;i++) {
      if (keys[i] === partParts[i]) {
        partParts = partParts.slice(1);
        return deepIntoObj(obj[keys[i]]);
      }
    }
  };
}
