import Image from "next/image";

export default function Portfolio() {
  return (
    <main>
        <h1 className="page-title">Sanaia's Portfolio</h1>

        <div className="project">
            <a href="index.html"><Image src="images/personal-website.png" alt="Sanaia's Personal Website" className="project-image"></Image></a>

            <div className="project-details">
                <p className="project-name">Sanaia's Personal Website</p>
                <p className="project-description">This site is meant to showcase what I've been able to accomplish while at Cal Poly.</p>

                <a href="index.html">LEARN MORE</a>
            </div>
        </div>

        <div className="project">
            <a href="index.html"><Image src="images/cal-poly-service-learning.png" alt="Cal Poly Service Learning" className="project-image"></Image></a>

            <div className="project-details">
                <p className="project-name">Cal Poly Service Learning</p>
                <p className="project-description">This site is meant to educate Cal Poly students and faculty/staff on service-learning oportunities.</p>

                <a href="#">LEARN MORE</a>
            </div>
        </div>
    </main>
  );
}