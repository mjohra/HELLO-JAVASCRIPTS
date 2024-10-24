/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketFare = 800;
let isChildren = false;
let isStudent = false;
let isSeniorCitizen = false;
let age = 25;

if (isChildren) {
  if (age < 10) {
    console.log("Free");
  }
} else if (!isStudent) {
  ticketFare *= 50 / 100;
  console.log("For Student: " + ticketFare);
} else if (isSeniorCitizen) {
  if (age >= 60) {
    ticketFare *= 15 / 100;
    console.log("For Senior Citizen: " + ticketFare);
  }
} else {
  console.log(ticketFare);
}
