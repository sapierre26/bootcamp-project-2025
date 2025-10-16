var blogs = [
    {
        title: "2025-26 SY Hack4Impact",
        date: "10-06-2025",
        description: "I’m happy to share that I’m getting started with Hack4Impact as a participant in their Bootcamp Project!",
        image: "./images/hack-4-impact.png",
        imageAlt: "Placeholder Image",
        slug: "hack-4-impact-bootcamp",
    },
    {
        title: "2025-26 SY CSC 402",
        date: "09-18-2025",
        description: "I’m happy to share that I’m getting started with my Capstone Project with PG&E!",
        image: "./images/software-engineering.png",
        imageAlt: "CSC 402",
        slug: "pg-&-e-capstone",
    },
    {
        title: "2025-26 SY BSU E-Board",
        date: "08-27-2025",
        description: "I’m happy to share that I’m starting a new position as the Programming Director for the Cal Poly Black Student Union!",
        image: "./images/bsu.PNG",
        imageAlt: "Cal Poly BSU",
        slug: "cal-poly-bsu",
    },
    {
        title: "2025-26 SY Job Position",
        date: "07-01-2025",
        description: "I’m happy to share that I’m starting a new position as a Student Web Developer at Cal Poly Office of Academic Innovations & Planning!",
        image: "./images/aip.jpg",
        imageAlt: "Academic Innovations & Programs",
        slug: "student-web-developer",
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
    var blogLink = document.createElement("a");
    blogLink.href = "/blog/".concat(blog.slug, ".html");
    if (blogContainer) {
        blogContainer.append(containerDiv);
    }
    imgDiv.append(image);
    textDiv.append(title, date, description);
    containerDiv.append(imgDiv, textDiv);
    blogLink.append(containerDiv);
});
