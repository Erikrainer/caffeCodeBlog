// Submit button start

const username = document.querySelector(".username");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const submitButton = document.querySelector(".submitButton");

// submit button end

// creating a count to check the condition
let count = JSON.parse(localStorage.getItem("count"));


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
    if(count >= 4){
        count = 1;
    }else{
        count++;
    }
    event.preventDefault();
    window.location="blog.html";
    // creating a count to do the index for the blog.js
    localStorage.setItem("count", JSON.stringify(count));
    saveForm();
    lastUser();
});

// End here the submit function