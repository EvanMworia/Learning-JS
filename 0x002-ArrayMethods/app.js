const people = [
  { name: "John", Age: 23, Occupation: "Developer" },
  { name: "Ann", Age: 45, Occupation: "Designer" },
  { name: "Susan", Age: 30, Occupation: "Tester" },
];

const result = people.find(function (person) {
  return person.name === "John";
});
console.log(result);
