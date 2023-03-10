const loadComment = () => {
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
    commentDiv.setAttribute(`onclick`, `loadDetails(${comment.id})`);
    commentDiv.innerHTML = `
    <h2>${comment.name}</h2>
    <p>${comment.body}</P>
    `;
    commentContainer.appendChild(commentDiv);
  });
};
const loadDetails = (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};
const displayDetails = (comment) => {
  const detailsContainer = document.getElementById("comment-details");
  detailsContainer.classList.add("details");
  detailsContainer.innerHTML = `
    <h2>${comment.name}</h2>
    <h2>Id: ${comment.id}</h2>
    <h2>Email: ${comment.email}</h2>
    <p>"${comment.body}"</P>
    `;
};
