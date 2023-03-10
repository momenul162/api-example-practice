/*
 
const loadComments = () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComment(data.slice(0, 20)));
};
const displayComment = (comments) => {
  const commentContainer = document.getElementById("comment-container");
  comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-field");
    commentDiv.innerHTML = `
      <h2>${comment.name}</h2>
      <p>${comment.body}</P>
      `;
    commentContainer.appendChild(commentDiv);
  });
};
loadComments(); 

*/
