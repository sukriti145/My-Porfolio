import React from "react";
import "./pagesCss/about.css";
import man from "../Image/man.png";

export const About = () => {
  return (
    <div className="About">
      <div className="card__section">
        <div className="About__first">
          <h1>About Me</h1>
          <p>
            I'm a Frontend Developer with 2 years of hands-on experience in front-end web development,
            specializing in JavaScript, React.js, HTML, and CSS. I have successfully built responsive,
            user-friendly web pages and redesigned existing interfaces to enhance both functionality
            and visual appeal.
          </p>
          <p>
            My focus is on clean, maintainable code and creating seamless user experiences that align
            with modern design standards. Fluent in English, Hindi, and Punjabi, I bring strong
            communication skills to collaborative projects.
          </p>
          <p>
            I hold a Bachelor of Technology (B.Tech) in Computer Science, with a strong academic
            foundation and a CGPA of 8.3. During my studies, I gained solid knowledge in software
            development, data structures, and web technologies, which I continue to apply in my
            professional work. My academic background has helped me build strong problem-solving skills
            and a disciplined approach to coding and project development.
          </p>
        </div>

        <section>
          <img src={man} alt="Man Illustration" />
        </section>
      </div>

      <div className="About__second">
        <h1>Education</h1>
        <section className="prep">
          <p>PrepBytes</p>
          <p>Online</p>
        </section>
        <hr className="hr_line" />
        <section className="stack">
          <p>Bachelor in Computer Science Engineering (B.Tech)</p>
          <p>2019 - 2023</p>
        </section>
        <section className="prep">
          <p>Gulzar Group of Institutes</p>
          <p>Khanna (Punjab)</p>
        </section>

        <hr className="hr_line" />

        <h1>Work Experience</h1>
        <section className="stack">
          <h2>Grazitti Interactive (Haryana, India)</h2>
          <p>11/2022 - Present</p>
        </section>
        <section className="prep">
          <h3>Role:</h3>
          <p>Software Engineer I</p>
        </section>

        <div className="experience-details">
          <h3>Developed Custom Solutions</h3>
          <p>
            Designed and implemented custom functionalities using React and Node.js to address diverse
            client requirements, ensuring high-quality deliverables.
          </p>

          <h3>Search Optimization</h3>
          <p>
            Worked extensively with Elasticsearch to optimize search performance, index large datasets,
            and fine-tune relevance based on user behavior and feedback.
          </p>

          <h3>Client Collaboration</h3>
          <p>
            Partnered with clients to gather requirements, provide technical consultation, and deliver
            scalable solutions tailored to their business needs.
          </p>

          <h3>Frontend Development</h3>
          <p>
            Created dynamic, responsive user interfaces using React, ensuring seamless user experiences
            across devices.
          </p>

          <h3>API Integration</h3>
          <p>
            Integrated third-party APIs and internal tools to enhance platform functionality and meet
            client expectations.
          </p>

          <h3>Debugging and Issue Resolution</h3>
          <p>
            Identified and resolved performance bottlenecks, reducing response time and enhancing
            application reliability.
          </p>

          <h3>Documentation & Training</h3>
          <p>
            Prepared technical documentation and conducted client training sessions to support the
            deployment and use of solutions.
          </p>
        </div>

        <hr className="hr_line" />
      </div>
    </div>
  );
};
