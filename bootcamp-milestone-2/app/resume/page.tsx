import Image from "next/image";

export default function Resume() {
  return (
    <main>
      <h1 className="page-title">Sanaia's Resume</h1>
      <a href="resume.pdf" download>
        <button className="button">Download Resume</button>
      </a>

      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              California Polytechnic State University, San Luis Obispo | San
              Luis Obispo, CA
            </h3>
            <p>
              Bachelor of Science in Software Engineering, Minor in Architecture
              | September 2022 - June 2026
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <div className="entry">
            <h3 className="entry-title"></h3>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Project-Based Object-Oriented Programming</li>
              <li>Introduction to Computer Organization</li>
              <li>Discrete Structures</li>
              <li>Systems Programming</li>
              <li>Software Engineering I</li>
              <li>Software Engineering II</li>
              <li>Programming Languages</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Project Experience</h2>
          <div className="entry">
            <h3 className="entry-title">Sanaia's Personal Website</h3>
            <p className="entry-description">
              Hack4Impact | October 2025 - PRESENT
            </p>
            <ul className="entry-details">
              <li>
                Went through a starter pack to get a understanding of web
                development fundamentals
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">To-Do List App</h3>
            <p className="entry-description">
              Software Engineering I & II | January 2025 - June 2025
            </p>
            <ul className="entry-details">
              <li>
                Developed a Figma prototype of how users would go between
                screens, create new lists, add tasks to lists, and add tasks to
                a calendar
              </li>
              <li>
                Created a UML activity diagram to model how a user would go
                about accessing the main to-do list screen, starting from the
                moment the app is opened
              </li>
              <li>
                Worked mostly in JavaScript and CSS to develop a split screen
                comprised of a to-do list, an add task screen component, and a
                month/week/day calendar component
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          <div className="entry">
            <h3 className="entry-title">Student Web Developer</h3>
            <p className="entry-description">
              Cal Poly Office of Innovations Programs & Planning | July 2025 -
              PRESENT
            </p>
            <ul className="entry-details">
              <li>
                Developed Figma prototypes for the reconstruction of websites
                under the Office of Academic Innovations & Planning umbrella
              </li>
              <li>
                Developed theme templates to work in Drupal, a content
                management system that will, in upcoming years, be replaced by a
                different system, to work when the change happens
              </li>
              <li>
                Updated and redesigned the existing Service Learning and Office
                of Innovations & Planning websites to comply with Cal Poly
                branding, accessibility standards, and policies in Drupal
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Student Assistant</h3>
            <p className="entry-description">
              Cal Poly Office of Academic Programs & Planning | July 2024 -
              PRESENT
            </p>
            <ul className="entry-details">
              <li>
                Worked on an archival project by continuing to scan older degree
                plan paper documents into specific OneDrive folders based on the
                major program
              </li>
              <li>
                Assisted with the formatting of agendas, spreadsheets, and
                financial plans
              </li>
              <li>
                Assisted with the formatting of agendas and financial planning
                spreadsheets for Cal Poly’s Instructionally Related Activities
                (IRA) for the 2025-26 school year
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">On-Call Team Member</h3>
            <p className="entry-description">
              Cal Poly Office of University Diversity & Inclusion | October 2024
              - PRESENT
            </p>
            <ul className="entry-details">
              <li>
                Assisted with the setup and take-down of events that are meant
                to educate those at Cal Poly and in the surrounding San Luis
                Obispo area on actions being taken to further DEI (Diversity,
                Equity, and Inclusion) initiatives on campus
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div id="skills">
            <div className="entry">
              <h3 className="entry-title">Software</h3>
              <ul className="skills-list">
                <li>Figma</li>
                <li>SketchUp</li>
                <li>Autodesk Fusion360</li>
                <li>Adobe</li>
                <li>Microsoft Office</li>
                <li>Canva</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">Programming Languages</h3>
              <ul className="skills-list">
                <li>Python</li>
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Drupal</li>
              </ul>
            </div>

            <div className="entry">
              <h3 className="entry-title">Fabrication</h3>
              <ul className="skills-list">
                <li>3D Printing</li>
                <li>Laser Cutting</li>
                <li>Lathe</li>
                <li>Soldering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Extracurriculars</h2>
          <div className="entry">
            <h3 className="entry-title">Programming Director</h3>
            <p className="entry-description">
              Cal Poly SLO Black Student Union (BSU) | 2025 - PRESENT
            </p>
            <ul className="entry-details">
              <li>
                Oversaw the logistics of BSU programming events, such as
                securing venues, catering, itineraries, and budgets, as well as
                managing subcommittees to ensure the smooth execution of all
                events
              </li>
              <li>
                Collaborated with the entirety of the BSU Board and BSU advisors
                during planning stages to delegate tasks
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Communications & Media Director</h3>
            <p className="entry-description">
              Cal Poly SLO Black Student Union (BSU) | July 2024 - June 2025
            </p>
            <ul className="entry-details">
              <li>
                Collaborated with the Graphic Arts Director to maintain
                consistent activity on the BSU Instagram page
              </li>
              <li>
                Responsible for designing flyers and capturing photos and videos
                for BSU-sponsored events throughout the school year, such as
                events titled October Madness, Black Love, and Powderpuff
              </li>
              <li>
                Formulated and designed flyers, photo collages, and videos to
                notify members of the BSU of weekly general member meetings,
                major upcoming events, and different support resources on campus
              </li>
              <li>
                Maintained continuous attendance to BSU-related events and
                non-BSU-related events, by capturing media to post that
                highlights the accomplishments of BSU members
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Volunteer</h3>
            <p className="entry-description">
              Cal Poly SLO Black Student Union (BSU) | November 2024 - January
              2025
            </p>
            <ul className="entry-details">
              <li>
                Developed graphics to acquire volunteers for and promote the ABC
                Conference being held on the Cal Poly SLO campus
              </li>
              <li>
                Developed an exploration guide for incoming students to have an
                understanding of ways to utilize time outside of conference
                activities
              </li>
              <li>
                Volunteered as an Attendee Escort to guide 800+ students from
                across California around Cal Poly to get to specific workshops,
                the auditorium, and wellness spaces
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Judge</h3>
            <p className="entry-description">
              Cal Poly Society of Women Engineers (SWE) | January 2022
              (Recurring)
            </p>
            <ul className="entry-details">
              <li>
                Volunteered as a Judge for the 2023, 2024, and 2025 VEX Robotics
                Competitions held at the Cal Poly SLO campuss
              </li>
              <li>
                Observed and interviewed 50 middle and high school teams to
                determine the best candidate for the award selection
              </li>
              <li>
                Worked as the Publicity Coordinator to develop the event logo
                and flyers for directing traffic
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
