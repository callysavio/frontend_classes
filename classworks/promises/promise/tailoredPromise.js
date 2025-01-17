// const fetchPost = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//      })
//      .then(posts => {
//         console.log('Fetched Posts:', posts)
//      })
//      .catch(error => {
//         console.error('Error fetching posts:', error);
//      });
// };

// fetchPost()

// const fetchPostById = (postId) => {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//      .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch the post.');
//         }
//         return response.json();
//      })
//      .then((post) => {
//         console.log('Fetched Post:', post)
//      })
//      .catch((error) => {
//         console.error('Error fetching post:', error);
//      });
// }

// fetchPostById(1);

// To get the body of the post called from the API
const fetchPostById2 = (postId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the post.');
        }
        return response.json();
     })
     .then((post) => console.log(post.body))
     .catch((error) => error.message);
    
}

fetchPostById2(1);