function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  const fillings = [];
  sandwich.fillings.forEach(function (filling){
    fillings.push(filling);
  });
  return fillings;
} 

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city == "Manchester");
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let buses = 0;
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
  let num = 0;
  arr.forEach(count => {
    if (count == "sheep"){
      num += 1;
    }
  });
  return num;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.postCode.charAt(0) == "M" && person.address.city == "Manchester");
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
