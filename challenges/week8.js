const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  let pos = nums.indexOf(n);

  if(pos === -1 || pos === nums.length-1) return null;

  return nums[pos+1];

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  const ceros = str.split('').filter(item => item === '0');
  const ones = str.split('').filter(item => item === '1');

  return {
    0: ceros.length,
    1: ones.length 
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  let total = 0;

  arrs.forEach(n =>{
    total += n.reduce((a, b) => a + b);
  });

  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if(arr.length <2) return arr;

  let aux=arr[0];
  
  arr[0]=arr[arr.length-1];
  arr[arr.length-1]=aux;

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
 
  let valid = false;

  for(let e in haystack){
    if(typeof haystack[e]  === 'string'){
      if(haystack[e].toLowerCase().includes(searchTerm.toLowerCase())) valid = true;
    }  
  }

  return valid;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");  

  let obj={};

  str=str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

  str.forEach( e => obj[e]=0);
  
  str.forEach( e =>{  
    if(str.includes(e)) obj[e]++;
  });

  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
