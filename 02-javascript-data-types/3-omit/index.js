import {checkInList} from "../2-pick";

/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let cloneObject = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!checkInList(key, ...fields)) {
      cloneObject[key] = value;
    }
  }

  return cloneObject;
};
