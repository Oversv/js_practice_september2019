/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");

  let result = 0;

  arr.forEach(n =>{
    if(n % 3 === 0 || n % 5 === 0) result+=n;
  })

  return result;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("a String is required");

  const dna = ['C', 'G', 'T', 'A'];
  
  return str.toUpperCase().split('').every(c => dna.includes(c));
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");  
  if (typeof str !== 'string') throw new Error("a String is required");

  let result="";
  
  str.toUpperCase().split('').forEach(c =>{
    if(c === 'T') result+='A'
    else if(c === 'A') result+='T'
    else if(c === 'C') result+='G'
    else result+='C'   
  });

  return result;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== 'number') throw new Error("a Number is required");

  let count = 0;
  
  for(let i = n; i >= 1; i--){
    if(n % i === 0) count++;
  }

  return count === 2;
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
  if (typeof n !== 'number') throw new Error("the first argument is not a number");
  if (fill === undefined) throw new Error("fill is required");


  let arr = [];
  
  for(let i = 0; i < n ; i++) {
     arr[i]=Array(n).fill(fill);
  }
  
  return arr;
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
  if (!Array.isArray(staff)) throw new Error("the first argument is not an Array");
  if (day === undefined) throw new Error("day is required");
  if (typeof day !== 'string') throw new Error("the second argument is not a String");

  if (staff.length === 0) return false;

  return  staff.filter(obj => obj.rota.includes(day)).length >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
