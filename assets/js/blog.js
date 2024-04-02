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
let i = 0;
// function to get back to the form
backButton.addEventListener("click", function(event){
    window.location="index.html";
});
// End of function to get back to the form
posts[i] = JSON.parse(localStorage.getItem("userForm"))
// Start Here the Posts for the blog
do{
if(posts[i].username){
    blogPostList[i].style.display = "none";
    i++;
}else {
    blogTitle[i].textContent = posts[i].title;
    blogContent[i].textContent = posts[i].content;
    blogUser[i].textContent = posts[i].username;
    i++;

}
}while(i < 4);
i = 0;

// Finish Here the Posts for the blog
