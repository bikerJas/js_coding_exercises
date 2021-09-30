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
  subjects = 0;
  for (var x = 0; x < people.length; x++) {
    subjects += people[x].subjects.length;
}
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  gotit = false;
  MenuLoop:
  for (var x = 0; x < menu.length; x++) {
    IngredientsLoop:
    for (var y = 0; y < menu[x].ingredients.length; y++){
      if (menu[x].ingredients[y] == ingredient){
        gotit = true;
        break MenuLoop;
    }
    
    }
}
  return gotit;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  duparray = [];
  for (var x = 0; x < arr1.length; x++) {
    for(var y = 0; y < arr2.length; y++){
      if ((arr1[x] == arr2[y]) && (duparray.indexOf(arr1[x]) === -1)){
        duparray.push(arr1[x]);
      }
    }
}
return duparray.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
