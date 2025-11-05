import Image from "next/image";

export default function Home() {
  return (
    <main>
        <h1 className="page-title">About Sanaia</h1>

        <div className="about">
            <div className="about-image">
                <Image src="/images/sanaia.jpg" alt="Sanaia sitting and posing outside" width={500} height={500}></Image>
            </div>
            <div className="about-text">
                <p>Hi, my name is <strong>Sanaia Pierre</strong>! I am from Chicago, IL, and a 4th-year <em>Software Engineering</em> major. I also have a minor in <em>Architecture</em>. 
                    At Cal Poly, I have been a member of the <strong>Black Student Union</strong> and <strong>National Society of Black Engineers</strong>. My 2nd year was my first year as an E-Board member for the BSU. I
                    was the Graphic Arts Designer; Then last year, I was the Communications & Media Director and this year, I'm the Programming Director. I have also been a judge at the VEX 
                    Robotics Competition that's held on campus since my first year with the <strong>Society of Women Engineers</strong>. I was drawn to that because I did robotics with FIRST in high school.
                </p>
                <p>
                    Outside of school, I enjoy hanging out with my friends. My friends at Cal Poly and I enjoy going to beach, walking around downtown, going out to eat, watching movies 
                    together, and going out. When I visit my friends from high school, most often my friends in Baltimore, I explore their campus, we go out to eat, and take the train to DC.
                    I am hoping to visit them next year, when I can buy a plane ticket.
                </p>
            </div>
            
        </div>
    </main>
  );
}
