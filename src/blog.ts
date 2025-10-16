type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Sanaia at Work",
    date: "08-27-2025",
    description:
      "I’m happy to share that I’m starting a new position as the Programming Director for the Cal Poly Black Student Union!",
    image: "./images/placeholder.png",
    imageAlt: "Placeholder Image",
    slug: "get-to-my-image",
  },
  {
    title: "Sanaia in Class",
    date: "07-01-2025",
    description:
      "I’m happy to share that I’m starting a new position as a Student Web Developer at Cal Poly Office of Academic Innovations & Planning!",
    image: "./images/placeholder.png",
    imageAlt: "Placeholder Image",
    slug: "get-to-my-image",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const containerDiv = document.createElement("div");
  containerDiv.className = "blog-post-container";

  const imgDiv = document.createElement("div");
  imgDiv.className = "blog-post-img";

  const textDiv = document.createElement("div");
  textDiv.className = "blog-post-text";

  const title = document.createElement("h1");
  title.textContent = blog.title;

  const date = document.createElement("h2");
  date.textContent = blog.date;

  const description = document.createElement("p");
  description.textContent = blog.description;

  if (blogContainer) {
    blogContainer.append(containerDiv);
  }
  imgDiv.append(image);
  textDiv.append(title, date, description);
  containerDiv.append(imgDiv, textDiv);
});
