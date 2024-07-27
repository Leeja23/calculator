let buttons = document.querySelectorAll("button");

let string = "";
let display = document.querySelector('#inputbox'); 

buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string) || ""; 
      } catch {
        string = "Error"; 
      }
    } else if (value === "AC") {
      string = "";
    } else if (value === "DEL") {
      if (string !== "Error") { 
        string = string.slice(0, -1);
      } else {
        string = ""; 
      }
    } else {
      if (string === "Error") { 
        string = "";
      }
      string += value;
    }
    if (display) {
      display.value = string;
    }
  });
});
