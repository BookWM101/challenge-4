document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const submitButton = document.getElementById('submit-button');
    const themeToggle = document.getElementById('theme-toggle');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (!username || !title || !content) {
            alert('Please fill out all fields.');
            return;
        }

        const post = {
            username,
            title,
            content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

