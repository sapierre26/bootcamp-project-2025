import Image from "next/image";

export default function Portfolio() {
  return (
    <main>
        <h1 class="page-title">Sanaia's Portfolio</h1>

        <div class="project">
            <a href="index.html"><img src="images/personal-website.png" alt="Sanaia's Personal Website" class="project-image"></a>

            <div class="project-details">
                <p class="project-name">Sanaia's Personal Website</p>
                <p class="project-description">This site is meant to showcase what I've been able to accomplish while at Cal Poly.</p>

                <a href="index.html">LEARN MORE</a>
            </div>
        </div>

        <div class="project">
            <a href="index.html"><img src="images/cal-poly-service-learning.png" alt="Cal Poly Service Learning" class="project-image"></a>

            <div class="project-details">
                <p class="project-name">Cal Poly Service Learning</p>
                <p class="project-description">This site is meant to educate Cal Poly students and faculty/staff on service-learning oportunities.</p>

                <a href="#">LEARN MORE</a>
            </div>
        </div>
    </main>
  );
}