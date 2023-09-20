/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (typeof arr === 'undefined' || arr.length === 0) { // вот здесь и выстреливает динамическая типизация, что только в runtime можно понять, передали ли arr или нет
    return [];
  }

  let uniqArr = [];
  let tmpMap = new Map();

  for (const elem of arr) {
    if (!tmpMap.has(elem)) {
      uniqArr.push(elem);
      tmpMap.set(elem, null);
    }
  }

  return uniqArr;
}
