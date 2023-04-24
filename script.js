const firstnameInput = document.getElementById("firstname");
const firstnameOutput = document.getElementById("display-firstname");
const ageInput = document.getElementById("age");
const a_hard_truthText = document.getElementById("a-hard-truth");
const buttonFirstname = document.getElementById("buttonFirstname");
const pwdInput = document.getElementById("pwd");
const pwd_confirmInput = document.getElementById("pwd-confirm");
const toggle_darkmode = document.getElementById("toggle-darkmode");
const main = document.getElementsByTagName("main");
// Exo 1 Print the input n°1 + button

// function getFirstname() {
//     firstnameOutput.append(firstnameInput.value);
// }
// //Events
// buttonFirstname.addEventListener("click", getFirstname);

// //Exo 1 Print the input n°2 + button

// buttonFirstname.addEventListener("click", () => {
//     firstnameOutput.append(firstnameInput.value);
// });

// Exo 1 The text aside is the same than the input - without button

firstnameInput.addEventListener("keyup", (e) => {
    firstnameOutput.append(e.key);
});

// Exo 2 Is the age below or over 18 old ?

ageInput.addEventListener("keyup", () => {
    if (ageInput.value >= "18") {
        a_hard_truthText.style.visibility = "visible";
    } else {
        a_hard_truthText.style.visibility = "hidden";
    }
});

// Exo 3 Validation of the password
function pwdValidation() {
    let pwdInputValue = pwdInput.value;
    let pwd_confirmInputValue = pwd_confirmInput.value;
    pwdInput.style.border = "solid";
    pwd_confirmInput.style.border = "solid";
    const div = document.querySelectorAll("div");

    console.log(div[0]);

    if (pwdInputValue.length < 6 || pwdInputValue !== pwd_confirmInputValue) {
        pwdInput.style.border = " 2px solid red";
        pwdInput.insertAdjacentText(
            "afterend",
            "Choose a password at least 6 words and equals to the first one please !"
        );
        pwd_confirmInput.style.border = "2px solid red";
    } else {
        pwdInput.style.border = " 1px solid green";
        pwd_confirmInput.style.border = "1px solid green";
    }
}
pwdInput.addEventListener("keyup", pwdValidation);
pwd_confirmInput.addEventListener("keyup", pwdValidation);

// Exo 4 Dark mode

toggle_darkmode.addEventListener("change", (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else if (e.currentTarget.value == "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});
