function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let x = 0; x < nums.length; x++){
    if (nums[x] < 1){
      smallNums.push(nums[x]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const firstLetter = [];
  for (let x = 0; x < names.length; x++){
    if (names[x].substr(0,1) == char){
      firstLetter.push(names[x]);
    }
  }
  return firstLetter;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];
  for (let x = 0; x < words.length; x++){
    if (words[x].substr(0,2) == "to" && words[x].substr(2,1) == " ") {
      verbs.push(words[x]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const numbers = [];
  for (let x = 0; x < nums.length; x++){
    if (Number.isInteger(nums[x])){
      numbers.push(nums[x]);
    }
  }
  return numbers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  for (let x = 0; x < users.length; x++){
    cities[x] = users[x].data.city.displayName;
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareroots = [];
  for (let x = 0; x < nums.length; x++){
    squareroots[x] = parseFloat((Math.sqrt(nums[x])).toFixed(2));
  }
  return squareroots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentence = [];
  let oneSentence = "";
  let y = 0;
  for (let x = 0; x < sentences.length; x++){
    oneSentence = sentences[x];
    if (oneSentence.toUpperCase().includes(str.toUpperCase())){
      sentence[y] = sentences[x];
      y++;
    } 
  }
  return sentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
  for (let x = 0; x < triangles.length; x++){
    let getLongestSide = 0;
    const getTrianglesides = triangles[x];
    for (let y = 0; y< getTrianglesides.length; y++){
      if (getTrianglesides[y] > getLongestSide){
        getLongestSide = getTrianglesides[y];
      }
    }
    longestSides.push(getLongestSide);
  }
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
