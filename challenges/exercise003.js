function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  for (var x = 0; x < nums.length; x++) {
    nums[x] = Math.pow(nums[x], 2);
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  camelword = "";
  for (var x = 0; x < words.length; x++) {
    if (x > 0) {
      camelword += words[x].substr(0,1).toUpperCase() + words[x].substring(1);
    }
    else {
      camelword = words[x].substr(0,1).toLowerCase() + words[x].substring(1);
    }
  }
    return camelword;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
