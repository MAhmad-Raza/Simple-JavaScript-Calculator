const calcScreen = document.getElementById("calcScreen");
const buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "C") {
      screenValue = "";
      calcScreen.value = screenValue;
    } else if (buttonText == "=") {
      calcScreen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      calcScreen.value = screenValue;
    }
  });
}
