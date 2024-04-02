// button selector element
const backButton = document.querySelector(".backButton");

// Blog tags selection
const blogList = document.querySelector(".blogList");
const blogPost = document.querySelector(".blogPost");

let posts = [];
// function to get back to the form
backButton.addEventListener("click", function(event){
    window.location="index.html";
});
// End of function to get back to the form

// Start Here the Posts for the blog 
posts = JSON.parse(localStorage.getItem("userForm"));

// Finish Here the Posts for the blog
