let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (a) => {
    a.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post Cannot Be Blank.";
        console.log("failure")
    }
    else{
        console.log("success")
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = (data) => {
    data["text"] = input.value
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let deletePost = (a) => {
    a.parentElement.parentElement.remove();
};

let editPost = (a) => {
    input.value = a.parentElement.previousElementSibling.innerHTML;
    a.parentElement.parentElement.remove();
};
