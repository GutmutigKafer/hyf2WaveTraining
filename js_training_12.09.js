//* KATAs training

//* Even or Odd

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// evenOrOdd(0);

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//* Who likes it?

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Vlad", "Signe`"]));

//* Opposites Attract

function lovefunc(fl1, fl2) {
  return (fl1 + fl2) % 2 === 1;
}
// console.log(lovefunc(2, 4));

//* Two to One

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// console.log(longest("ahajagada", "jtjtyrtgdf"));

//* Find the unique number

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// function findUniq(arr) {
//   let arr2 = arr.sort((a, b) => a - b);
//   if (arr2[0] !== arr2[1]) {
//     return arr2[0];
//   } else {
//     return arr2[arr2.length - 1];
//   }
// }

function findUniq(arr) {
  let arr2 = arr.sort((a, b) => a - b);
  return arr2[0] !== arr2[1] ? arr2[0] : arr2[arr2.length - 1];
}
