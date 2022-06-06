let passLength = prompt(
  "Enter  length of the password between 8 and 128 characters "
);

// const getPasswordCriteria = () => {
console.log(passLength);
const passLengthInt = parseInt(passLength);
if (passLengthInt >= 8 && passLengthInt <= 128) {
  return passLengthInt;
} else {
  alert("Please enter the value between 8 and 128");
}
return 10;

let arr = [];
let c1 = prompt("Do you want to enter lowercase");
console.log(c1);
if (c1 == "y" || c1 == "Y") {
  arr.push("abcdefghijklmnopqrstuvwxyz");
} else;
let c2 = prompt("Do you want to enter lowercase");
if (c2 == "y" || c1 == "Y") {
  arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
} else;

//let c3 = Prompt("Do you want to enter lowercase");
if (c3 == "y" || c1 == "Y") {
  arr.push("0123456789");
} else;

//let c4 = Prompt("Do you want to enter lowercase");
if (c4 == "y" || c1 == "Y") {
  arr.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
} else;

/* return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];*/
return arr;
// }
// const createRandomPassword = (pLength, criteria) => {
let count = 0;
let passwordi = "";
while (count < pLength) {
  for (let j = 0; j < criteria.length; j += 1) {
    const index = Math.floor(Math.random() * criteria.length);
    console.log(index);

    const strarr = criteria[index];
    passwordi += strarr.charAt(Math.floor(Math.random() * strarr.length));
    count += 1;
    if (count >= pLength) {
      break;
    }
  }
}
console.log(passwordi);
return passwordi;
// };
