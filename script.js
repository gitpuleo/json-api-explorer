fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    const postlist = document.getElementById("postList");
    const ul = document.createElement("ul");
    let jsonPost = json;

    jsonPost.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${post.title}</p> \n ${post.body}`
    ul.appendChild(li);
});
postlist.appendChild(ul);
})
.catch(function(error) {
    console.error("Error fetching data:", error);
});

let postForm = document.getElementById("postForm");
let titleInput = document.getElementById("titleInput");
let bodyInput = document.getElementById("bodyInput");
let formError = document.getElementById("formError");
let formSuccess = document.getElementById("formSuccess");


postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let userInputPost = {
        title: titleInput.value,
        body: bodyInput.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInputPost)
    })
    .then(response =>{
        return response.json();
    })
    .then(data => {
        formError.textContent = "";
        formSuccess.innerHTML = `<p>Submitted</p>`;
    })

})

