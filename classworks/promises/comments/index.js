const commentParent = document.getElementById("commentParent")

const commentList = []

const fetchComments = () =>{
    return fetch("https://jsonplaceholder.typicode.com/comments")

    .then((response) => {
        if (!response.ok){
            throw new Error("Network issues, move to a better location")
        }
        return response.json()
    })

    .then((comments) => {
        comments.forEach((comment) =>{
            const li = document.createElement("li")
            commentList.push(li)
            li.innerHTML=`
             <div class="comments-container">
                <h2>${comment.name}</h2>
                <h4>${comment.email}</h4>
                <p>${comment.body}</p>
             </div>
            `;
            commentParent.appendChild(li)
        })

    })
    .catch((error) => console.error(error));
}
fetchComments()