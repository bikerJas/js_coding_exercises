const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = 0;

  if (nums.indexOf(n) == -1){
    return null;
  }
  else if (nums.indexOf(n) == nums.length-1){
    return null;
  }
  else {
    index = nums.indexOf(n);
    return nums[index + 1];
  }
  
 };

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const digits = {0:0,1:0};

  for (let x = 0; x < str.length; x++) {
    let digit = str[x];
    if (digits[digit]) {
      digits[digit]++;
    } else {
      digits[digit] = 1;
    } 
  }
  return digits;
};
  
 const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);
  return reversed;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let totalArrays = 0;
  arrs.forEach(function (subArray){
    const innerArray = subArray;
    innerArray.forEach(function (total){
      totalArrays += total;
    });
  
});
  return totalArrays;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let first = "";
  let last = "";
  if (arr.length > 1){
    first = arr.shift();
    last = arr.pop();
    arr.push(first);
    arr.unshift(last);
    return arr;
  } else {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let foundit = false;
  let items = Object.values(haystack);
  items.forEach(function (findWord){
    if(findWord.toString().toLowerCase().includes(searchTerm.toLowerCase())){
      foundit = true;
    }
  });
  
  return foundit;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const words = {};
  let splitWords = str.replace(/[^a-zA-Z ]/g, "").split(" ");

  for (let x = 0; x < splitWords.length; x++) {
    let word = splitWords[x].toLowerCase();
    if (words[word]) {
      words[word]++;
    } else {
      words[word] = 1;
    } 
  }
  return words;
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
