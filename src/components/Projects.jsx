import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import {
  FaEarthAmericas,
  FaGithub,
  FaGlobe,
  FaPersonCircleQuestion,
} from "react-icons/fa6";
import img1 from "../../public/public/img2.png";
import img2 from "../../public/public/img3.png";
import img3 from "../../public/public/img4.png";
import img4 from "../../public/public/img6.png";
import img5 from "../../public/public/img5.png";
import img6 from "../../public/public/img10.png";
import img7 from "../../public/public/img11.png";
import img8 from "../../public/public/img12.png";
import img9 from "../../public/public/img13.png";
function Projects() {
  const [listProjects] = useState([
    {
      name: "Project Udevs in website clone",
      des: "This project is a clone version of the udev web site, made for practice",
      mission: "Front-end Developer, adaptive design",
      language: "HTML5, CSS3, React JS, Framer-motion,...",
      images: img1,
      link: "https://udevs-seven.vercel.app/",
      github: "https://github.com/turgunboy01/udevs",
    },
    {
      name: "Project Netflix in website clone",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission: "Front-end Developer, adaptive design",
      language: "HTML5, CSS3, React JS, Rest api,...",
      images: img2,
      link: "https://netflix-cone-pink.vercel.app/",
      github: "https://github.com/turgunboy01/netflix-cone",
    },
    {
      name: "Project Green Shop in website",
      des: "This website was created for the flower shop. Adaptive design, made for all devices.",
      mission: "Front-end Developer, system adaptive design",
      language: "HTML5, CSS3, React JS, Firebase,...",
      images: img3,
      link: "https://green-shop-gray.vercel.app",
      github: "https://github.com/turgunboy01/green-shop",
    },
    {
      name: "Project Crypto Hunter in website",
      des: "This website was created for the flower shop. Adaptive design, made for all devices.",
      mission: "Front-end Developer",
      language: "HTML5, CSS3, React JS, Rest Api,...",
      images: img4,
      link: "https://green-shop-gray.vercel.app",
      github: "https://github.com/turgunboy01/green-shop",
    },
    {
      name: "Project Countries in website",
      des: "On this website you can learn about cryptocurrencies. All data comes through the Api. Sorry in advance, there were some issues with the data coming from the API.",
      mission: "Front-end Developer, adaptive design",
      language: "HTML5, CSS3, React JS, Rest Api,...",
      images: img5,
      link: "https://green-shop-gray.vercel.app",
      github: "https://github.com/turgunboy01/green-shop",
    },
    {
      name: "Project Green Shop in website",
      des: "This website was created for the flower shop. Adaptive design, made for all devices.",
      mission: "Front-end Developer, system adaptive design",
      language: "HTML5, CSS3, React JS, Firebase,...",
      images: img6,
      link: "https://green-shop-gray.vercel.app",
      github: "https://github.com/turgunboy01/green-shop",
    },
    {
      name: "Project Green Shop in website",
      des: "This website was created for the flower shop. Adaptive design, made for all devices.",
      mission: "Front-end Developer, system adaptive design",
      language: "HTML5, CSS3, React JS, Firebase,...",
      images: img7,
      link: "https://green-shop-gray.vercel.app",
      github: "https://github.com/turgunboy01/green-shop",
    },
    {
      name: "Project MovieX in website",
      des: "This website was created for the movie aplication. Adaptive design, made for all devices. ",
      mission: "Front-end Developer, system adaptive design",
      language: "HTML5, CSS3, React JS, Rest Api,...",
      images: img8,
      link: "https://elaborate-pithivier-ddd52a.netlify.app",
      github: "https://github.com/turgunboy01/movie-App",
    },
    {
      name: "Project Green Shop in website",
      des: "This website was created for the flower shop. Adaptive design, made for all devices.",
      mission: "Front-end Developer, system adaptive design",
      language: "HTML5, CSS3, React JS, Firebase,...",
      images: img9,
      link: "https://examen-8.vercel.app/",
      github: "https://github.com/turgunboy01/green-shop",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        As a front-end developer, my projects involve creating web pages,
        implementing responsive design, adding interactive elements, enhancing
        UX/UI, optimizing performance, ensuring cross-browser compatibility, and
        integrating APIs.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des desc1">{value.des}</div>
              <div className="mission">
                <div>
                  <FaPersonCircleQuestion />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FaEarthAmericas />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
                <div className="links">
                  <a href={value.link} target="_blank">
                    <FaGlobe size={20} />
                  </a>
                  <a href={value.github} target="_blank">
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
