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

//* FreeCodeCamp

//Email Mask

const maskEmail = (email) => {
  let sliced = email.slice(1, email.indexOf("@") - 1);

  let mask = sliced.replace(sliced, "*".repeat(sliced.length));

  let maskedEmail = email[0] + mask + email.slice(email.indexOf("@") - 1);

  return maskedEmail;
};

let email = "apple.pie@example.com";

// console.log(maskEmail(email));

//BlackJack counter

let count = 0;
const cc = (card) => {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }
  return count > 0 ? `${count} Bet` : `${count} Hold`;
};

//Leap Year

// const isLeapYear = (year) => {
//   if (year % 4 !== 0) {
//     return `${year} is not a leap year.`;
//   }
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       return `${year} is a leap year.`;
//     }
//     return `${year} is not a leap year.`;
//   }
//   return `${year} is a leap year.`;
// };

// let year = 2000;

// let result = isLeapYear(year);
// console.log(result);

// const isLeapYear = (year) => {
//   if (year % 100 === 0 && year % 400 !== 0) {
//     return `${year} is not a leap year.`;
//   }

//   return year % 4 === 0
//     ? `${year} is a leap year.`
//     : `${year} is not a leap year.`;
// };

// let year = 1900;

// let result = isLeapYear(year);
// console.log(result);

//Lunch picker program

const lunches = [];
const addLunchToEnd = (array, string) => {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
};

const addLunchToStart = (array, string) => {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
};

const removeLastLunch = (array) => {
  if (array.length !== 0) {
    console.log(
      `${array[array.length - 1]} removed from the end of the lunch menu.`
    );
    array.pop();
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};

const removeFirstLunch = (array) => {
  if (array.length !== 0) {
    console.log(`${array[0]} removed from the start of the lunch menu.`);
    array.shift();
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};

const getRandomLunch = (array) => {
  if (array.length !== 0) {
    return console.log(
      `Randomly selected lunch: ${
        array[Math.floor(Math.random() * array.length)]
      }`
    );
  } else {
    return console.log("No lunches available.");
  }
};

const showLunchMenu = (array) => {
  if (array.length !== 0) {
    console.log(`Menu items: ${array.join(", ")}`);
  } else {
    return console.log("The menu is empty.");
  }
};

// addLunchToEnd(lunches, "Pasta");
// addLunchToEnd(lunches, "Soup");
// addLunchToEnd(lunches, "Burger");

// showLunchMenu(lunches);

// removeFirstLunch(lunches);

// getRandomLunch(lunches);

//Golf score

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

// const golfScore = (par, strokes) => {
//   if (strokes === 1) return names[0];
//   if (strokes <= par - 2) return names[1];
//   if (strokes === par - 1) return names[2];
//   if (strokes === par) return names[3];
//   if (strokes === par + 1) return names[4];
//   if (strokes === par + 2) return names[5];
//   if (strokes >= par + 3) return names[6];
// };

const golfScore = (par, strokes) => {
  switch (true) {
    case strokes === 1:
      return names[0];
    case strokes <= par - 2:
      return names[1];
    case strokes === par - 1:
      return names[2];
    case strokes === par:
      return names[3];
    case strokes === par + 1:
      return names[4];
    case strokes === par + 2:
      return names[5];
    default:
      return names[6];
  }
};

// console.log(golfScore(3, 5));

//* QUIZ GAME / OBJECTS

const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Fe", "Go"],
    answer: "Au",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
    answer: "George Washington",
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    category: "Entertainment",
    question: "Which actor played Tony Stark in the Marvel Cinematic Universe?",
    choices: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    category: "Sports",
    question: "How many players are on a standard soccer team during a match?",
    choices: ["9", "10", "11"],
    answer: "11",
  },
];

const getRandomQuestion = (array) =>
  array[Math.floor(Math.random() * array.length)];

let selectedQuestion = getRandomQuestion(questions);

const getRandomComputerChoice = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getResults = (obj, compChoice) =>
  obj.answer === compChoice
    ? `The computer's choice is correct!`
    : `The computer's choice is wrong. The correct answer is: ${obj.answer}`;

// console.log(
//   getResults(
//     selectedQuestion,
//     getRandomComputerChoice(selectedQuestion.choices)
//   )
// );

//* RECORD COLLECTION

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const updateRecords = (records, id, prop, value) => {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
    console.log(records[id][prop]);
  } else if (
    prop === "tracks" &&
    value !== "" &&
    !records[id].hasOwnProperty("tracks")
  ) {
    records[id]["tracks"] = [value];
    console.log(records[id]["tracks"]);
  } else if (prop === "tracks" && value !== "") {
    records[id]["tracks"].push(value);
    console.log(records[id]["tracks"]);
  }
  return records;
};

// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// console.log(recordCollection);

// After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.

const vowels = ["a", "e", "i", "o", "u"];

const getVowelCount = (sentence) => {
  let count = 0;
  for (let letter of sentence) {
    for (let vowel of vowels) {
      if (letter.toLowerCase() === vowel) {
        count++;
        console.log(letter);
        console.log(count);
      }
    }
  }
  return count;
};

// console.log(getVowelCount("Apples are tasty fruits"));

const getWordCount = (sentence) => {
  if (!sentence && sentence.trim() === "") {
    return 0;
  }

  let count = 0;
  let words = sentence.split(" ");
  for (let word of words) {
    if (word.trim() !== "") {
      count++;
      console.log(word);
    }
  }
  return count;
};

// console.log(getWordCount("    "));

//* Find longest word

const findLongestWordLength = (string) => {
  let words = string.trim().split(" ");
  let longest = words.reduce((prev, i) => {
    if (i.trim().length > prev.trim().length) {
      prev = i;
    }
    return prev;
  });
  return longest.length;
};

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

//* Mutation algorithm

const mutation = (array) => {
  let result = true;
  for (let letter of array[1]) {
    if (!array[0].toLowerCase().includes(letter.toLowerCase())) {
      result = false;
    }
  }
  return result;
};

// console.log(mutation(["hello", "neo"]));

//* Chunk array

const chunkArrayInGroups = (array, num) => {
  let arrayNumber = Math.floor(array.length / num);
  let finalArr = [];
  let position = 0;
  for (let i = position; i < arrayNumber; i++) {
    let chunkArr = [];
    for (let j = 0; j < num; j++) {
      chunkArr.push(array[j]);
    }
    array.splice(0, num);
    finalArr.push(chunkArr);
    position += num;
  }
  if (array.length !== 0) {
    finalArr.push(array);
  }
  return finalArr;
};

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

//*  Profile Lookup

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, property) => {
  let result = "No such contact";
  for (let contact of contacts) {
    if (contact.firstName === name) {
      console.log(contact["firstName"]);
      if (Object.hasOwn(contact, property)) {
        console.log(property, contact[property]);
        result = contact[property];
      } else {
        result = "No such property";
      }
    }
  }
  return result;
};
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));

//* String Repeating Function

const repeatStringNumTimes = (string, num) => {
  let finalString = "";
  for (let i = 0; i < num; i++) {
    if (num <= 0) {
      return "";
    }
    finalString = finalString.concat(string);
  }
  return finalString;
};

// console.log(repeatStringNumTimes("*", 3));

//* Largest Number Finder

const largestOfAll = (array) => {
  let newArr = new Array();
  for (let one of array) {
    newArr.push(one.reduce((sum, i) => (i > sum ? i : sum)));
  }
  return newArr;
};

// console.log(
//   largestOfAll([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

//* First Element Finder

const findElement = (array, func) => {
  for (let num of array) {
    if (func(num)) {
      return num;
    }
  }
  return undefined;
};

// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   })
// );

//* Slice and Splice

const frankenSplice = (arr1, arr2, index) => {
  let finalArr = [];
  finalArr.push(...arr2.slice(0, index));
  finalArr.push(...arr1.slice(arr1));
  finalArr.push(...arr2.slice(arr2.length - index));
  return finalArr;
};

// console.log(frankenSplice([1, 2, 3], [4, 5], 1));

//* Pyramid

const pyramid = (char, num, bool) => {
  let pyramidArr = ["\n"];

  if (bool) {
    for (let i = num; i > 0; i--) {
      let spacesInRow = num - i;
      let charsInRow = i * 2 - 1;
      let row = " ".repeat(spacesInRow).concat(char.repeat(charsInRow), "\n");
      pyramidArr.push(row);
    }
  } else {
    for (let i = 1; i <= num; i++) {
      let spacesInRow = num - i;
      let charsInRow = i * 2 - 1;
      let row = " ".repeat(spacesInRow).concat(char.repeat(charsInRow), "\n");
      pyramidArr.push(row);
    }
  }
  return pyramidArr.toString("").split(",").join("");
};

// console.log(pyramid("p", 5, true));
// console.log(pyramid("o", 4, false));

//* Gradebook App
const getAverage = (array) => {
  return array.reduce((sum, one) => sum + one) / array.length;
};

const getGrade = (score) => {
  switch (true) {
    case score < 60:
      return "F";
    case score < 70:
      return "D";
    case score < 80:
      return "C";
    case score < 90:
      return "B";
    case score < 100:
      return "A";
    default:
      return "A+";
  }
};
let gradeStr;
const hasPassingGrade = (grade) => {
  gradeStr = getGrade(grade);
  console.log(gradeStr);
  return gradeStr !== "F";
};

const studentMsg = (array, studentScore) => {
  let hasPassed = hasPassingGrade(studentScore);
  let average = getAverage(array);
  if (hasPassed) {
    return `Class average: ${average}. Your grade: ${gradeStr}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${gradeStr}. You failed the course.`;
  }
};

// console.log(hasPassingGrade("C"));
// console.log(getGrade(50));

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

//*  Falsy Remover

const bouncer = (array) => {
  let finalArr = [];
  for (let one of array.slice()) {
    if (one) {
      finalArr.push(one);
    }
  }
  return finalArr;
};

// console.log(bouncer([7, "ate", "", false, 9]));

//* Inventory Managment Program

// let product1 = {
//   name: "synthesizer",
//   quantity: 2
// }

const inventory = [];

const findProductIndex = (name) => {
  return inventory.findIndex((item) => item.name === name.toLowerCase());
};

const addProduct = (prodObject) => {
  const { name: newName } = prodObject;
  prodObject.name = newName.toLowerCase();
  const index = findProductIndex(newName);
  if (index !== -1) {
    const product = inventory[index];
    product.quantity += prodObject.quantity;
    console.log(`${prodObject.name} quantity updated`);
    return inventory[index].quantity;
  } else {
    console.log(`${prodObject.name} added to inventory`);
    return inventory.push(prodObject);
  }
};

const removeProduct = (name, quantity) => {
  let nameLow = name.toLowerCase();
  let index = findProductIndex(nameLow);
  if (index === -1) return console.log(`${nameLow} not found`);

  let newQuantity = inventory[index].quantity - quantity;
  switch (true) {
    case newQuantity === 0:
      inventory[index] = inventory[inventory.length - 1];
      inventory.pop();
      return inventory;
    case newQuantity < 0:
      console.log(
        `Not enough ${nameLow} available, remaining pieces: ${inventory[index].quantity}`
      );
      return inventory[index].quantity;
    default:
      inventory[index].quantity = newQuantity;
      console.log(`Remaining ${nameLow} pieces: ${inventory[index].quantity}`);
      return inventory[index].quantity;
  }
};

// console.log(removeProduct("FLOUR", 5));

//* Password Generator

const generatePassword = (length) => {
  let generatedPass = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  while (generatedPass.length < length) {
    generatedPass = generatedPass.concat(
      chars[Math.round(Math.random(0, 1) * chars.length)]
    );
  }
  return generatedPass;
};
let password = generatePassword(8);

// console.log(`Generated password: ${password}`);

//* Sum All Algorithm

const sumAll = (array) => {
  let arr = array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll([5, 10]));

//* GNA Pair Generator

// const pairElement = (string) => {
//   const pairs = [
//     ["A", "T"],
//     ["C", "G"],
//   ];
//   let finalArr = [];
//   for (let letter of string) {
//     if (pairs[0].includes(letter)) {
//       let second = pairs[0][pairs.length - (pairs[0].indexOf(letter) + 1)];
//       console.log(`second: ${second}`);
//       let pairArr = new Array(letter, second);
//       finalArr.push(pairArr);
//     } else if (pairs[1].includes(letter)) {
//       let second = pairs[1][pairs.length - (pairs[1].indexOf(letter) + 1)];
//       let pairArr = new Array(letter, second);
//       finalArr.push(pairArr);
//     }
//   }
//   return finalArr;
// };

const pairElement = (string) => {
  const pairs = [
    ["A", "T"],
    ["C", "G"],
  ];
  let finalArr = [];
  for (let letter of string) {
    for (let pair of pairs) {
      if (pair.includes(letter)) {
        let second = pair[pair.length - (pair.indexOf(letter) + 1)];
        finalArr.push(new Array(letter, second));
      }
    }
  }
  return finalArr;
};

// console.log(pairElement("ATCGA"));

//* HTML Converter

const symbMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
const convertHTML = (string) => {
  let finalStr = string;
  for (let letter of string) {
    for (let symbol of Object.keys(symbMap)) {
      if (letter === symbol) {
        finalStr = finalStr.replace(letter, symbMap[symbol]);
      }
    }
  }
  return finalStr;
};
// console.log(symbMap);
// console.log(convertHTML("Schindler's List"));

//* Optional Arguments Sum

const addTogether = (...numbers) => {
  const [num1, num2] = numbers;
  if (numbers.length === 1 && typeof num1 === "number") {
    return function sum(num2) {
      if (typeof num2 !== "number") {
        return undefined;
      }
      return num1 + num2;
    };
  } else if (
    numbers.length === 2 &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  } else {
    return undefined;
  }
};
// console.log(addTogether(5)(7));
// console.log(addTogether("2", 3));
// console.log(addTogether(23.4, 30));
// console.log(addTogether(2)([3]));
// console.log(addTogether(5));

//* Book Organizer

const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "The Catching Fire",
    authorName: "Suzanne Collins",
    releaseYear: 2008,
  },
];
const sortByYear = (book1, book2) => {
  let result = book1.releaseYear - book2.releaseYear;
  if (result === 0) return 0;
  return result < 0 ? -1 : 1;
};
const filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

// console.log(sortByYear(books[0], books[1]));

// console.log(filteredBooks);

//* Sorted Index Finder

const getIndexToIns = (array, num) => {
  return array
    .sort((a, b) => a - b)
    .findIndex(
      (value, indx, arr) =>
        (num < value && num > arr[indx - 1]) || num === value
    );
};

// console.log(getIndexToIns([1, 2, 3, 4], 1.5));
// console.log(getIndexToIns([20, 3, 5], 19));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

//* Symmetric Difference Function

const diffArray = (arr1, arr2) => {
  const combArr = arr1.concat(arr2);
  return combArr.filter(
    (value) => !(arr1.includes(value) && arr2.includes(value))
  );
};

// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

//* Value Remover Function

const destroyer = (array, ...args) => {
  let finalArr = [];
  array.forEach((value) => {
    if (!args.includes(value)) {
      finalArr.push(value);
    }
  });
  return finalArr;
};

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//* Matching Object Filter

const whatIsInAName = (array, source) => {
  const finalArr = [];
  const sourceKeys = Object.keys(source);
  const sourceValues = Object.values(source);
  array.forEach((obj, indexArr) => {
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    let valueMatches = sourceValues.length;
    objKeys.forEach((key, indexObj) => {
      const indexSource = sourceKeys.indexOf(key);
      if (objValues[indexObj] === sourceValues[indexSource]) {
        valueMatches -= 1;
      }
    });
    if (valueMatches === 0) {
      finalArr.push(array[indexArr]);
    }
  });
  return finalArr;
};

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, cookie: 2 }
//   )
// );

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );

//* Sum All Primes Calculator

const sumPrimes = (num) => {
  if (num < 2) return 0;
  let finalSum = 2;
  for (let one = 3; one <= num; one += 2) {
    let isPrime = true;
    for (let i = 2; i < one; i++) {
      if (one % i === 0) isPrime = false;
    }
    if (isPrime) {
      finalSum += one;
    }
  }
  return finalSum;
};

// console.log(sumPrimes(10));

//* Range-Based LCM Calculator

const smallestCommons = (array) => {
  let arr = array.sort((a, b) => a - b);
  let mult;
  for (let one = arr[0]; one <= arr[1]; one++) {
    if (one === arr[0]) mult = one;
    mult = (mult * one) / greatestComFactor(mult, one);
  }
  return mult;
};
const greatestComFactor = (big, small) => {
  let factor = 1;
  for (let i = 2; i <= small; i++) {
    if (big % i === 0 && small % i === 0) {
      factor = i;
    }
  }
  return factor;
};

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([13, 2]));
