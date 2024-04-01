// Theme switcher start
const themeSwitcher = document.querySelector(".themeSwitcher");
const container = document.querySelector(".container");
// theme switcher end

// Theme Mode Changes with localStorage, if theres no localStorage recorded yet
// the initial mode will be "dark"
let mode = "dark";
let modeType;

saveTheme();
// Below it`s saving the information for the theme at the localstorage, if null dark will be called
function saveTheme() { 
  const themeStorage = localStorage.getItem("class", modeType);
  container.setAttribute("class", themeStorage);
}
// bellow get the event click and create a change for the theme between Latte(light) and Espresso(dark)
themeSwitcher.addEventListener("click", function() {
  if (mode === "dark" || modeType === null) {
    mode = "light"
    localStorage.setItem("class", "light");
  }else {
    mode = "dark"
    localStorage.setItem("class", "dark");
  }
  modeType = mode;
  saveTheme();
});
// Here ends the Theme Logic

