// we need a function that help us get all posts
// When we get the post we format it
// we then do DOM with the formated posts

// Gettiing the whole posts
const postParent = document.getElementById('postParent');

const postsLists = []

// const fetchPosts = () => {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//             if (!response.ok){
//                 throw new Error ("Network response failed, check your internet connection")
//             }
//             return response.json();
//         })
//         .then((posts) => {
//             posts.forEach((post) => {
//                 const li = document.createElement("li")
//                 postsLists.push(li)
//                 li.innerHTML = `
//                     <div class="postwrapper">
//                         <h3>${post.title}</h3>
//                         <p>${post.body}</p>
//                     </div>
//                 `;
//                 postParent.appendChild(li)
//             })
//         })
//         .catch((error) => console.error(error));
    
// }
// fetchPosts()

// comments

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (!response.ok){
                throw new Error ("Network response failed, check your internet connection")
            }
            return response.json();
        })
        .then((posts) => {
            posts.forEach((post) => {
                const li = document.createElement("li")
                postsLists.push(li)
                li.innerHTML = `
                    <div class="postwrapper">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
                postParent.appendChild(li)
            })
        })
        .catch((error) => console.error(error));
    
}
fetchPosts()