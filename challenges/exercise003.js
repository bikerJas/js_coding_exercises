function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squaredNum = (item) => {
    return Math.pow(item, 2);
  };
  const allSquaredNums = nums.map(squaredNum);

  return allSquaredNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelword = "";
  for (let x = 0; x < words.length; x++) {
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
  let subjects = 0;
  for (let x = 0; x < people.length; x++) {
    subjects += people[x].subjects.length;
}
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let gotit = false;
  MenuLoop:
  for (let x = 0; x < menu.length; x++) {
    for (let y = 0; y < menu[x].ingredients.length; y++){
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
  const duparray = [];
  for (let x = 0; x < arr1.length; x++) {
    for(let y = 0; y < arr2.length; y++){
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
