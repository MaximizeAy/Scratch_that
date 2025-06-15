// function toggleReadMore(button) {
//     const blog = document.getElementById("blogBox");
//     blog.classList.toggle("expanded");
//     button.textContent = blog.classList.contains("expanded") ? "Read Less" : "Read More";
//   }

function toggleBlog(btn, id) {
const content = document.getElementById(id);
content.classList.toggle('expanded');
btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
}