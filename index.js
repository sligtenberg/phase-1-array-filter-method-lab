// const findMatching = function (names, driverToMatch) {
//     return names.filter(function (name) {
//         return name.toLowerCase() === driverToMatch.toLowerCase();
//     });
// }

// rewritten with arrow functions below
const findMatching = (names, driverToMatch) => names.filter((name) => name.toLowerCase() === driverToMatch.toLowerCase());

const fuzzyMatch = (names, driverToMatchFirstLetter) => names.filter((name) => name.slice(0, 1) === driverToMatchFirstLetter.slice(0, 1));

// original below
// const matchName = function (driversObj, nameToMatch) {
//     return driversObj.filter((driver) => driver.name === nameToMatch);
// }

// modified:
const matchName = (driversObj, nameToMatch) => driversObj.filter((driver) => driver.name === nameToMatch);