import React from 'react';
import style from './blogPreview.module.css';
import Image from "next/image";
import { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="blog-post-container">
      <div className="blog-post-img">
				<Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
      </div>
      <div className="blog-post-text">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.description}</p>
      </div>
	  </div>
  );
}