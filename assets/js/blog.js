// button selector element
const backButton = document.querySelector(".backButton");

// Blog tags selection
const blogList = document.querySelector(".blogList");
const blogPost = document.querySelector(".blogPost");
const blogPostList = document.querySelectorAll(".postList");
const blogTitle = document.querySelectorAll(".blogTitle");
const blogContent = document.querySelectorAll(".blogContent");
const blogUser = document.querySelectorAll(".blogUser");
let posts = [];
// function to get back to the form
backButton.addEventListener("click", function(event){
    window.location="index.html";
});
// End of function to get back to the form
posts = JSON.parse(localStorage.getItem("userForm"))
// Start Here the Posts for the blog
    // blogTitle[].textContent = posts.title;
    // blogContent[].textContent = posts[].content;
    // blogUser[].textContent = posts[i].username;


// Finish Here the Posts for the blog
