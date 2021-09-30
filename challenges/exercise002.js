function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  fillings = [];
  for (var x = 0; x < sandwich.fillings.length; x++){
    fillings[x] = sandwich.fillings[x];
  }
  return fillings;
} 

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city == "Manchester");
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  switch (people) {
    case (people <= 40):
      buses = 1;
      break;
    case (people <= 80):
      buses = 2;
      break;
    case (people <= 120):
      buses = 3;
      break;
    default:
      buses = Math.ceil(people/40);    
  }
  return buses;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  num = 0;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] == "sheep") {
      num += 1;
    }
  }
  return num;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  code = person.postCode;
  return person.postCode;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
