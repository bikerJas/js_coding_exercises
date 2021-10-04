// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    const allColours = [...colours];
    return allColours;
}

function shoppingList(list, newItem){
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    const newShoppingList = [...list, ...newItem];
    return newShoppingList;
}

function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    const maxNum = Math.max(...numbers);
    return maxNum;
}

function splitThatString(string){ 
    if (!string) throw new Error("string is required");
    const splitString = [...string];
    return splitString;
}


// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    return (user?.address?.postcode);
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};