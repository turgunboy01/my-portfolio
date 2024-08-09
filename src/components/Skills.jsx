import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "HTML is the standard markup language for creating web pages. It uses tags like <h1>, <p>, and <div> to define elements on a page. These tags structure the content, such as headings, paragraphs, and containers, giving it meaning and layout on the web.",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      des: "CSS (Cascading Style Sheets) is a styling language used to control the appearance of web pages. It allows you to add styles such as colors, sizes, spacing, and layout to HTML elements. With CSS, you can make web pages visually appealing and responsive across different devices.",
      icon: FaCss3,
    },
    {
      name: "Tailwind Css",
      des: "Tailwind CSS is a utility-first CSS framework that provides pre-built classes like text-center and bg-blue-500. Instead of writing custom CSS, you apply these classes directly in your HTML to style elements. This approach speeds up the design process and keeps your code clean.",
      icon: SiTailwindcss,
    },
    {
      name: "Javascript",
      des: "JavaScript is a programming language that runs in the browser, adding interactivity to web pages. It enables you to create dynamic content, interact with users (e.g., handling clicks or form submissions), and manipulate data. JavaScript is widely used in both front-end and back-end development.",
      icon: FaJs,
    },
    {
      name: "React Js",
      des: "React.js is a JavaScript library developed by Facebook for building user interfaces. It’s component-based, meaning you create reusable pieces of UI that can be combined to build complex applications. React makes it easier to develop dynamic and responsive web applications.",
      icon: FaReact,
    },
    {
      name: "Next Js",
      des: "Next.js is a framework for React.js that supports server-side rendering (SSR) and static site generation (SSG). It enhances React applications by making them faster, more SEO-friendly, and easier to build. Next.js allows you to create full-stack web applications efficiently with built-in features for routing, data fetching, and more.",
      icon: RiNextjsFill,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        As a front-end developer, I excel in communication, solving problems,
        managing my time effectively, adapting to new technologies, paying close
        attention to detail, and collaborating well with others.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <value.icon />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
