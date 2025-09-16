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

const isLeapYear = (year) => {
  if (year % 100 === 0 && year % 400 !== 0) {
    return `${year} is not a leap year.`;
  }

  return year % 4 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
};

let year = 1900;

let result = isLeapYear(year);
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

console.log(
  getResults(
    selectedQuestion,
    getRandomComputerChoice(selectedQuestion.choices)
  )
);
