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
    date: "10-08-2025",
    description: "I went to work",
    image: "image here",
    imageAlt: "There is an image here",
    slug: "get-to-my-image",
  },
  {
    title: "Sanaia in Class",
    date: "10-09-2025",
    description: "I went to class",
    image: "image here",
    imageAlt: "There is an image here",
    slug: "get-to-my-image",
  },
];

const blogContainer = document.getElementById('blog-container');

blogs.forEach((blog) => {
  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const div = document.createElement("div");
  div.className = "blog-post-container"

  const title = document.createElement("h1");
  title.textContent = blog.title;

  const date = document.createElement("h2");
  date.textContent = blog.date;

  const description = document.createElement("p");
  description.textContent = blog.description;

  div.append(image, title, date, description);
  if (blogContainer) {
    blogContainer.append(div);
  } 
});
