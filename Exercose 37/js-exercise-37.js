
const addpostButton = document.querySelector("#addpostbutton");
const containerPost = document.querySelector("#posts");

addpostButton.addEventListener("click", addPost)

 

function addPost() {
    const inputTitle = document.querySelector("#input-title").value;
    const inputImage = document.querySelector("#input-image").value;
    const contentMessage = document.querySelector("#textarea-message").value;

    if(inputTitle === "" || contentMessage === ""){
      alert("maxa dhacay")
      return
    }
    const post = {
      id: Date.now,
      inputTitle,
      inputImage,
      contentMessage,
    }

    createPostToDom(post)
}

function createPostToDom(post) {
    const div = document.createElement("div")
    div.classList.add("post")
    // div.dataset.id = id.post()

    div.innerHTML = `  <h1>${post.inputTitle}</h1>
        ${post.inputImage ? ` <img src="${post.inputImage}" alt="post Image">` : ""}
        <p>${post.contentMessage}</p>

        <div id="postcontainer">
          <button onclick="delete-btn">Delete</button>
          <button onclick="update-btn">Update</button>
        </div>
        `
    containerPost.appendChild(div)


 
}

function saveTaskLocalStorage() {

    // const oldPost = JSON.parse(localStorage.getItem(post))

    const oldPost = getToLocalStorage();

    oldPost.push(post)

    localStorage.setItem("posts" , JSON.stringify(post))
}

function getToLocalStorage() {
    const oldPost = JSON.parse(localStorage.getItem(post))
    return oldPost
}




// function addPost() {

//     const title = document.querySelector("#input-title").value;
//     const image = document.querySelector("#input-image").value;
//     const message = document.querySelector("#textarea-message").value;

//     if(title === "" || message === "") {
//         alert("Blog post website")
//         return
//     }
    
//     const post = {
//         id : Date.now(),
//         title,
//         image,
//         message, 
//     }

//     createPostToDom();

// }

// function createPostToDom(post) {
//     const div = document.createElement("div");
//     div.classList.add("post");
//     // div.dataset.id = post.id;

//     containerPost.appendChild(div);


// }




// const addPostBtn = document.querySelector("#addPost")
// const containerPost = document.querySelector("#posts")

// addPostBtn.addEventListener("click", addPost)

// function addPost() {
//   const title = document.querySelector("#title").value
//   const image = document.querySelector("#image").value
//   const content = document.querySelector("#content").value
  
//   if (title === "" || content === "") {
//     alert("Title iyo content waa qasab")
//     return
//   }

//   const post = {
//     id: Date.now(),
//     title,
//     image,
//     content
//   }

//   createPost(post)

  // nadiifi input-yada
//   document.querySelector("#title").value = ""
//   document.querySelector("#image").value = ""
//   document.querySelector("#content").value = ""
// }

// function createPost(post) {
//   const div = document.createElement("div")
//   div.classList.add("post")

//   div.innerHTML = `
//     <h1>${post.title}</h1>
//     ${post.image ? `<img src="${post.image}" alt="post image">` : ""}
//     <p>${post.content}</p>
//   `

//   containerPost.appendChild(div)
// }
 


