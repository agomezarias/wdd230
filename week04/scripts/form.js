const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


// Could not get the error message to work.
// const pass1 = document.getElementById("password");
// const pass2 = document.getElementById("confirm-password");
// const message = document.querySelector("#formmessage");

// pass2.addEventListener("focusout", checkSame);

// function checkSame() {
//     if (pass1.value !== pass2.value) {
//         message.textContent = "❗Key Phrases DO NOT MATCH!";
//         message.style.visibility = "show";
//         pass2.style.backgroundColor = "#fff0f3";
//         pass2.value = "";
//         pass2.focus();
//     } else {
//         message.style.display = "none";
//         pass2.style.backgroundColor = "#fff";
//         pass2.style.color = "#000";
//     }
// }
