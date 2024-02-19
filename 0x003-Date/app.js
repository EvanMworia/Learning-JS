const months = [
  `January`,
  `February`,
  `March`,
  `January`,
  `January`,
  `January`,
  `January`,
  `January`,
  `January`,
  `January`,
  `January`,
  `December`,
];

const days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Monday`,
  `Monday`,
  `Friday`,
  `Saturday`,
];
// this is how we get the current date -> by not passing anything in the instance of Date

const date = new Date();

const currDay = date.getDay();
const currMonth = date.getMonth();
const currDate = date.getDate();
const currYear = date.getFullYear();
const time = date.getTime();

const finaDay = days[currDay];
const finaDate = currDate;
const finaMonth = months[currMonth];
const finaYear = currYear;

const sentence = `GiveAway Ends on ${finaDay}, ${finaDate} ${finaMonth} ${finaYear} `;
document.body.innerHTML = `<h1>${sentence}</h1>`;

// however if we want to set a date we can do pass the desired date in the parentheses
const dateSet = new Date(`21/09/2024`);
const day = dateSet.getDay();
const setDateSentence = `GiveAway Ends on ${days[day]} `;
document.body.innerHTML = `<h1>${setDateSentence}</h1>`;
console.log(setDateSentence);
