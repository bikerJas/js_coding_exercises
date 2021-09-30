function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return (word.substr(0,1).toUpperCase() + word.substr(1, word.length));
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0,1) + "." + lastName.substr(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  vat = (originalPrice/100*vatRate).toFixed(2);
  return originalPrice + parseFloat(vat);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  reduced = (originalPrice/100*reduction).toFixed(2);
  return originalPrice - parseFloat(reduced);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length%2 == 0) {
    mid = str.substr(str.length/2-1,2);
  } else {
    mid = str.substr(str.length/2,1);
  }
  return mid;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  letters = word.split("");
  reverseletters = letters.reverse();
  reversed = reverseletters.join("");
  return reversed;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  num = words.length;
  reversedWords = [];
  for(var x = 0; x < num; x++){
    reversedWord = words[x];
    letters = reversedWord.split("");
    reversedletters = letters.reverse();
    reversedWords[x] = reversedletters.join("");
  }
  return reversedWords;
  }


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  y = 0;
  for (var x = 0; x < users.length; x++) {
    if (users[x].type == "Linux"){
      y += 1;
    }
  }
  return y;  
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  sum = 0;
  for (var x = 0; x < scores.length; x++){
    sum += scores[x];
  }
  return mean = parseFloat((sum/scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n%3 === 0 && n%5 === 0) {
      answer = "fizzbuzz";
  } else if (n%3 === 0 ) {
    answer = "fizz";
  } else if (n%5 === 0 ) {
    answer = "buzz";
  } else {
    answer = n;
  }
  return answer; 
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
