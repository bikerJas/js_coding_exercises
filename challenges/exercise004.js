function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  numbers = nums.filter(checkNums);

  function checkNums(nums){
    return nums < 1;
  }
  return numbers;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  firstLetter = names.filter(checkLetter);

  function checkLetter(names){
    if (names.substr(0,1) == char) {
      return true;  
    } else {
      return false;
    }
  }
  return firstLetter;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  verbs = words.filter(checkWords);

  function checkWords(words){
    if (words.substr(0,2) == "to" && words.substr(2,1) == " "){
      return true;
    } else {
      return false;
    }
  }
 return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  numbers = nums.filter(checkNums);

  function checkNums(nums){
    return Number.isInteger(nums);
  }
  return numbers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach(function (city){
    cities.push(city.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareroots = [];
  nums.forEach(function (squareroot){
    squareroots.push(parseFloat((Math.sqrt(squareroot)).toFixed(2)));
  });
  return squareroots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentence = [];
  let oneSentence = "";
  sentences.forEach(function (capitalSentence){
    oneSentence = capitalSentence;
    if (oneSentence.toUpperCase().includes(str.toUpperCase())){
      sentence.push(capitalSentence);
    }
  });
  return sentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
  triangles.forEach(function (oneTriangle){
    let getLongestSide = 0;
    const getTriangleSides = oneTriangle;
    getTriangleSides.forEach(function (side){
      if (side > getLongestSide){
        getLongestSide = side;
      }
    });
    longestSides.push(getLongestSide);
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
