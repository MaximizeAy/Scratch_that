function toggleBlog(btn, id) {
const content = document.getElementById(id);
content.classList.toggle('expanded');
btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
}