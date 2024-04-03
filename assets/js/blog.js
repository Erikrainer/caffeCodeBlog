// button selector element
const backButton = document.querySelector(".backButton");

// Get the count
let count = JSON.parse(localStorage.getItem("count"));
count--;
// get the userForm with username, title and content
let posts = [];
posts[count] = JSON.parse(localStorage.getItem("userForm"))
let blogInfo = [];

// Blog tags selection
const blogList = document.querySelector(".blogList");
const blogPost = document.querySelector(".blogPost");
const blogPostList = document.querySelectorAll(".postList");
const blogTitle = document.querySelectorAll(".blogTitle");
const blogContent = document.querySelectorAll(".blogContent");
const blogUser = document.querySelectorAll(".blogUser");

// function to get back to the form
backButton.addEventListener("click", function(event){
    window.location="index.html";
});
// End of function to get back to the form

// pull the localstorage posts to the blogInfo Array
blogInfo[0] = JSON.parse(localStorage.getItem("userInfo0"));
blogInfo[1] = JSON.parse(localStorage.getItem("userInfo1"));
blogInfo[2] = JSON.parse(localStorage.getItem("userInfo2"));
blogInfo[3]= JSON.parse(localStorage.getItem("userInfo3"));

// a loop to set the localStorage for the new value
for (let i = 0; i < 4; i++) {
    let storageKey = "userInfo" + i;
    if (posts[i] !== undefined) {
        localStorage.setItem(storageKey, JSON.stringify(posts[i]));
        blogInfo[i] = posts[i];
    } else {
        console.log("No post found for index " + i);
    }
}

// a loop to set the textcontent and if empty hide the box
for(let x = 0; x < 4; x++){
if(blogInfo[x] != null){
blogTitle[x].textContent = blogInfo[x].title;
blogContent[x].textContent = blogInfo[x].content;
blogUser[x].textContent = "Posted by: " +  blogInfo[x].username;
}else{
    blogPostList[x].style.display = 'none';
}
}

