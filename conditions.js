// const calismaSuresi = prompt("Calisma suresi:");
// let maas = prompt("Maasini giriniz:");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz:", maas);
//   console.log(`Zamli maasiniz:, ${maas}`);
// } else {
//   console.log("Uzgunuz maasiniza zam yapamiyoruz", maas);
// }

// console.log("Gule gule");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log("Zamli maasiniz", maas);
// }

// console.log("Gule gule");

// const grade = prompt("Please enter your grade:");

// let result = "";
// if (grade < 0) {
//   console.log("Grade can not be smaller than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != "") {
//   console.log(`Your score:${result}`);
// }

// if (result) {
//   console.log(`Your score:${result}`);
// }

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("Biggest:", n1);
//   }
// }

// if (n1 > n2 && n1 > n3) {
//   console.log("Biggest:", n1);
// } else if (n2 > n1 && n2 > n3) {
//   console.log("Biggest:", n2);
// } else if (n3 > n1 && n3 > n2) {
//   console.log("Biggest:", n3);
// }

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }

// console.log(`${biggest} is biggest`);

const grade1 = prompt("Please enter your grade:");

// grade1 >= 50 ? console.log("SUCCEED") : console.log("FAILED");
// const score = grade1 >= 50 ? "PASSED" : "FAILED";
// console.log(score);

const score1 = grade1 >= 50 ? "SUCCEED" : "";
console.log(score1);

const speed = 110;

speed > 120
  ? console.log("Speedy")
  : speed >= 90
  ? console.log("Normal")
  : console.log("Low Speed");
