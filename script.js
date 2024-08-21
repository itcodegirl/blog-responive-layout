// Mock data (posts.json or fetched from API)
const posts = [
	{
		id: 1,
		title: "First Blog Post",
		description: "This is the first blog post.",
		content: "Full content for the first post goes here."
	},
	{
		id: 2,
		title: "Second Blog Post",
		description: "This is the second blog post.",
		content: "Full content for the second post goes here."
	}
];

// Rendering posts on the homepage
const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
	posts.forEach(post => {
		const postElement = document.createElement('div');
		postElement.classList.add('post');
		postElement.innerHTML = `
      <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
      <p>${post.description}</p>
    `;
		postsContainer.appendChild(postElement);
	});
}

// Loading a single post on post.html
const postId = new URLSearchParams(window.location.search).get('id');
const postContent = document.getElementById('post-content');
if (postId && postContent) {
	const post = posts.find(p => p.id === parseInt(postId));
	if (post) {
		document.getElementById('post-title').textContent = post.title;
		postContent.textContent = post.content;
	}
}

// Comment handling
const commentsSection = document.getElementById('comments-section');
if (commentsSection) {
	const comments = [];

	document.getElementById('submit-comment').addEventListener('click', () => {
		const newComment = document.getElementById('new-comment').value;
		if (newComment) {
			comments.push(newComment);
			const commentDiv = document.createElement('div');
			commentDiv.textContent = newComment;
			document.getElementById('comments').appendChild(commentDiv);
			document.getElementById('new-comment').value = '';
		}
	});
}
