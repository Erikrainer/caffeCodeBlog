// button selector element
const backButton = document.querySelector(".backButton");

// Get the count
let count = JSON.parse(localStorage.getItem("count"));
count--;
console.log(count);
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
    blogTitle[count].textContent = posts.title;
    blogContent[count].textContent = posts.content;
    blogUser[count].textContent = posts.username;
// Finish Here the Posts for the blog
