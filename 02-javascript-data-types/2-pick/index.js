/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let cloneObject = {};

  // for (let key in obj) {
  //   if (checkInList(key, ...fields)) {
  //     cloneObject[key] = obj[key];
  //   }
  // }
  // В чем преимущество способа ниже с Object.entries(obj) перед текущим способом перебора полей объекта ?

  for (const [key, value] of Object.entries(obj)) {
    if (checkInList(key, ...fields)) {
      cloneObject[key] = value;
    }
  }


  return cloneObject;
};

/**
 * checkInList - Checking either value exists in fields
 * @param {string} value - value to find
 * @param {...string} fields - properties
 * @returns {boolean} - true if value exists in fields else false
 */
export function checkInList(value, ...fields) {
  for (let field of fields) {
    if (value === field) {
      return true;
    }
  }

  return false;
}
