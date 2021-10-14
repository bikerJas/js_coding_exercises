/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  else if (typeof n !== 'number') throw new Error('n must be a number');
  else if (n < 0 ) throw new Error('n must be a positive number')

  return [...String(n)].reduce((add, digit) => Number(add) + Number(digit), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof start !== 'number') throw new Error('start must be a number');
  if (typeof end !== 'number') throw new Error('end must be a number');
  if (end < start) throw new Error('end must be greater than start');

  const range =[];

  for (let x = start; x <= end; x += step) {
    range.push(x);
  }
  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let appUsers = [];

  users.forEach((user) => {
   user.screenTime.forEach((appTime) => {
    let busyTime = 0; 
    if (date === appTime.date) {
      for (let app in appTime.usage) {
        busyTime += appTime.usage[app];
      }
      if (busyTime > 100)
      appUsers.push(user.username);
      
    }
  });
});
return appUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  return 'rgb('+ parseInt((hexStr.slice(1,3)),16) +','+parseInt((hexStr.slice(3,5)),16) +','+parseInt((hexStr.slice(5,7)),16)+')';
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let winner = '';
  let checkSquares = {};

//get a single line of elements for the received filled board of noughts and crosses

board.flat(3).forEach((xOr0,index) => {
  checkSquares[index] = xOr0;
});

if (checkSquares[0] !== null && checkSquares[0] === checkSquares[1] && checkSquares[1] === checkSquares[2]){
    winner = checkSquares[0];}
  else if   
 (checkSquares[3] !== null && checkSquares[3] === checkSquares[4] && checkSquares[4] === checkSquares[5]){
    winner = checkSquares[3];}
  else if 
  (checkSquares[6] !== null && checkSquares[6] === checkSquares[7] && checkSquares[7] === checkSquares[8]){
    winner = checkSquares[6];}
 else if
  (checkSquares[0] !== null && checkSquares[0] === checkSquares[3] && checkSquares[3] === checkSquares[6]){
    winner = checkSquares[0];}
 else if    
  (checkSquares[1] !== null && checkSquares[1] === checkSquares[4] && checkSquares[4] === checkSquares[7]){
    winner = checkSquares[1];}
 else if
  (checkSquares[2] !== null && checkSquares[2] === checkSquares[5] && checkSquares[5] === checkSquares[8]){
    winner = checkSquares[2];}
 else if
  (checkSquares[0] !== null && checkSquares[0] === checkSquares[4] && checkSquares[4] === checkSquares[8]){
    winner = checkSquares[0][0];}
  else if
  (checkSquares[2] !== null && checkSquares[2] === checkSquares[4] && checkSquares[4] === checkSquares[6]){
    winner = checkSquares[2];}
  else { 
    winner = null;  
  } return winner;
 };

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};