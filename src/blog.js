var blogs = [
    {
        title: "Sanaia at Work",
        date: "08-27-2025",
        description: "I’m happy to share that I’m starting a new position as the Programming Director for the Cal Poly Black Student Union!",
        image: "./images/placeholder.png",
        imageAlt: "Placeholder Image",
        slug: "get-to-my-image",
    },
    {
        title: "Sanaia in Class",
        date: "07-01-2025",
        description: "I’m happy to share that I’m starting a new position as a Student Web Developer at Cal Poly Office of Academic Innovations & Planning!",
        image: "./images/placeholder.png",
        imageAlt: "Placeholder Image",
        slug: "get-to-my-image",
    },
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var containerDiv = document.createElement("div");
    containerDiv.className = "blog-post-container";
    var imgDiv = document.createElement("div");
    imgDiv.className = "blog-post-img";
    var textDiv = document.createElement("div");
    textDiv.className = "blog-post-text";
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var date = document.createElement("h2");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.textContent = blog.description;
    if (blogContainer) {
        blogContainer.append(containerDiv);
    }
    imgDiv.append(image);
    textDiv.append(title, date, description);
    containerDiv.append(imgDiv, textDiv);
});
