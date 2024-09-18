document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const backButton = document.getElementById('back-button');
    const themeToggle = document.getElementById('theme-toggle');

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By ${post.username}</strong></p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});

