function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  nums.forEach(function (number) {
    if (number < 1){
      smallNums.push(number);
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const firstLetter = [];
  names.forEach(function (name){
    if (name.substr(0,1) == char){
      firstLetter.push(name);
    }
  });
  return firstLetter;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];
  words.forEach(function (word){
    if (word.substr(0,2) == "to" && word.substr(2,1) == " "){
      verbs.push(word);
    }
  });
 return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const numbers = [];
  nums.forEach(function (num){
    if (Number.isInteger(num)){
      numbers.push(num);
    }
    });
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
  /*for (let x = 0; x < triangles.length; x++){
    let getLongestSide = 0;
    const getTrianglesides = triangles[x];
    for (let y = 0; y< getTrianglesides.length; y++){
      if (getTrianglesides[y] > getLongestSide){
        getLongestSide = getTrianglesides[y];
      }
    }
    longestSides.push(getLongestSide);
  }*/
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
