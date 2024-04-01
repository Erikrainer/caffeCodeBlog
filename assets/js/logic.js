// Theme switcher start
const themeSwitcher = document.querySelector(".themeSwitcher");
const container = document.querySelector(".container");
// theme switcher end
// Submit button start
const username = document.querySelector(".username");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const submitButton = document.querySelector("submitButton");
// submit button end

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

// Starts Here the submit button function
function saveForm(){
    const userForm = {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim()
    };
    localStorage.setItem("userForm", JSON.stringify(userForm));
}

function lastUser() {
    const lastUser = JSON.parse(localStorage.getItem("userForm"));

    if(lastUser !== null) {
        document.querySelector(".username").innerHTML = userForm.username;
        document.querySelector(".title").innerHTML = userForm.title;
        document.querySelector(".content").innerHTML = userForm.content;
        console.log(userForm);
    }
}

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    saveForm();
    lastUser();
});

// End here the submit function