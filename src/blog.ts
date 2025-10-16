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
    title: "2025-26 SY Hack4Impact",
    date: "10-06-2025",
    description:
      "I’m happy to share that I’m getting started with Hack4Impact as a participant in their Bootcamp Project!",
    image: "./images/hack-4-impact.png",
    imageAlt: "Placeholder Image",
    slug: "hack-4-impact-bootcamp",
  },
  {
    title: "2025-26 SY CSC 402",
    date: "09-18-2025",
    description:
      "I’m happy to share that I’m getting started with my Capstone Project with PG&E!",
    image: "./images/software-engineering.png",
    imageAlt: "CSC 402",
    slug: "pg-&-e-capstone",
  },
  {
    title: "2025-26 SY BSU E-Board",
    date: "08-27-2025",
    description:
      "I’m happy to share that I’m starting a new position as the Programming Director for the Cal Poly Black Student Union!",
    image: "./images/bsu.PNG",
    imageAlt: "Cal Poly BSU",
    slug: "cal-poly-bsu",
  },
  {
    title: "2025-26 SY Job Position",
    date: "07-01-2025",
    description:
      "I’m happy to share that I’m starting a new position as a Student Web Developer at Cal Poly Office of Academic Innovations & Planning!",
    image: "./images/aip.jpg",
    imageAlt: "Academic Innovations & Programs",
    slug: "student-web-developer",
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

  const blogLink = document.createElement("a");
  blogLink.href = `/blog/${blog.slug}.html`;

  if (blogContainer) {
    blogContainer.append(containerDiv);
  }
  imgDiv.append(image);
  textDiv.append(title, date, description);
  containerDiv.append(imgDiv, textDiv);
  blogLink.append(containerDiv);
});
