document.getElementById('searchButton').addEventListener('click', searchPosts);

function searchPosts() {
    const userId = document.getElementById('userId').value;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = ""; // Limpiar los datos antiguos
    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.title;
        p.addEventListener('click', () => showPostComments(item.id));
        dataDiv.appendChild(p);
    });
}

function showPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(data => displayComments(data))
    .catch(error => console.error('Error:', error));
}

function displayComments(comments) {
    const detailsDiv = document.getElementById('postDetails');
    detailsDiv.innerHTML = ""; // Limpiar los comentarios antiguos
    comments.forEach(comment => {
        detailsDiv.innerHTML += `<h2>${comment.name}</h2><p>${comment.body}</p>`;
    });
}
