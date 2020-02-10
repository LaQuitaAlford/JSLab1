var name1 = "Ada Lovelace";
var name2 = "Brendan";
var name3 = "Dorothy";

prompt(
  "Which of the 4 names are the longest, Ada Lovelace, Brendan, Charles or Dorothy?"
);

if (name1 === "Ada Lovelace") {
  console.log(name1 + "has the longest name.");
}
if (name2 === "Brendan") {
  console.log(name2 + "and Charles tie for the longest name.");
}
if (name3 === "Dorothy") {
  console.log(name3 + ",Charles and Brendan are the same length.");
} else {
  console.log("Charles and Brendan tie for the longest name");
}
