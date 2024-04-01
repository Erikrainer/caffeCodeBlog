// Submit button start

const username = document.querySelector(".username");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const submitButton = document.querySelector(".submitButton");

// submit button end

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

submitButton.addEventListener("click", function(event){
    window.location="blog.html";
    event.preventDefault();
    saveForm();
    lastUser();
});

// End here the submit function