/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */

  const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
return arr.reduce(((total, num) => num % 5 == 0 || num % 3 == 0 ? total + num : total),0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  return str === str.replace(/[^CGTA ]/g, "");
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  else if (!isValidDNA(str)) throw new Error("string contains invalid DNA");
  const mapping = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  return [...str].map(item => mapping[item]).join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  else if (typeof n !== 'number') throw new Error("n must be a number");
  else if (n < 2) throw new Error("n has to be greater than 2");
  else if (n != Math.round(n)) throw new Error("n has to be an integer");
  for (let x = 2; x <= Math.sqrt(n); x++){
    if(n % x == 0)
    return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (typeof n !== 'number') throw new Error("n must be a number");
  if (typeof fill !== 'string') throw new Error("fill must be a string");
  let matrix = [];
  for (let x = 0; x < n; x++){
    let items = [];
    for (let y = 0; y < n; y++){
      items.push(fill);
    }
    matrix.push(items);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (!Array.isArray(staff)) throw new Error("staff must be an array");
  if (typeof day !== 'string') throw new Error("day must be a string");
  return (
    staff.filter((employees) => employees.rota.includes(day)).length >= 3);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
