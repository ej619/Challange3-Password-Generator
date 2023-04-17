// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria = {
  length: "",
  includeLowerCase: "",
  includeUpperCase: "",
  includeNumbers: "",
  includeCharacters: ""
};

// Write password to the #password input
function writePassword() {
  let length = prompt("Enter a Password Length");
  if(length < 8 || length > 128){
    prompt("Please enter number between 8 and 128!");
  } else {
      showConfirmBox();
      criteria.length = length;
  }
  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function showConfirmBox() {
  document.getElementById("confirm-box").hidden = false;
}

function confirm(data) {
  if (data === "yes") {
    criteria.includeLowerCase = true;
    document.getElementById("confirm-box").hidden = true;
    document.getElementById("confirm-box2").hidden = false;
  } else {
    criteria.includeLowerCase = false;
    document.getElementById("confirm-box").hidden = true;
    document.getElementById("confirm-box2").hidden = false;
    console.log("include lowercase?: " + criteria.includeLowerCase);
  }
}

function confirmUpperCase(data) {
  if (data === "yes") {
    criteria.includeUpperCase = true;
    document.getElementById("confirm-box2").hidden = true;
    document.getElementById("confirm-box3").hidden = false;
  } else {
    criteria.includeUpperCase = false;
    document.getElementById("confirm-box2").hidden = true;
    document.getElementById("confirm-box3").hidden = false;
    console.log("include uppercase?: " + criteria.includeUpperCase);
  }
}

function confirmNumber(data) {
  if (data === "yes") {
    criteria.includeNumbers = true;
    document.getElementById("confirm-box3").hidden = true;
    document.getElementById("confirm-box4").hidden = false;
  } else {
    criteria.includeNumbers = false;
    document.getElementById("confirm-box3").hidden = true;
    document.getElementById("confirm-box4").hidden = false;
    console.log("include Numbers? " + criteria.includeNumbers)
  }
}

function confirmCharacter(data) {
  if (data === "yes") {
    criteria.includeCharacters = true;
    document.getElementById("confirm-box4").hidden = true;
  } else {
    criteria.includeCharacters = false;
    document.getElementById("confirm-box4").hidden = true;
    console.log("include characters? " + criteria.includeCharacters);
  }

  console.log(criteria);
}

