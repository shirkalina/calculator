let a = ""; //first num
let b = ""; //second num
let sign = ""; //знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["-", "+", "x", "/"];
const output = document.querySelector(".output");
const resetBtn = document.querySelector(".reset");
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

output.textContent.lenght = 12;

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  output.textContent = 0;
}

resetBtn.addEventListener("click", function () {
  clearAll();
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("reset")) {
      return;
    }

    output.textContent = "";

    const key = button.textContent;
    if (digit.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        output.textContent = a;
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        output.textContent = b;
      } else {
        b += key;
        output.textContent = b;
      }
      return;
    }

    if (action.includes(key)) {
      sign = key;
      output.textContent = sign;
    }

    if (key === "=") {
      if (b === "") b = a;
      switch (sign) {
        case "+":
          a = +a + +b;
          break;

        case "-":
          a = a - b;
          break;

        case "x":
          a = a * b;
          break;

        case "/":
          if (b === "0") {
            output.textContent = "ошибка";
            a = "";
            b = "";
            sign = "";
            return;
          }
          a = a / b;
          break;
      }

      finish = true;
      output.textContent = a;
    }
  });
});
