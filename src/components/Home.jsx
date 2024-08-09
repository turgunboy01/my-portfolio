import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const Home = () => {
  const scrollTab = useRef();
  CustomHook(scrollTab);
  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>Turg'unboy Mahmudjonov</span>
        </div>
        <div className="des">
          {/* 30 */}I am Makhmudjonov Turgunboy. I was born in Namangan region
          in 2001. I successfully completed the Front-end course in Najot ta'lim
          and received the Najot ta'lim Certificate. I am currently working as a
          front-end developer. I speak Russian, English, Korean and Uzbek. I can
          create e-commerce, SRM, Booking web sites and I am gaining experience.
        </div>

        <a
          href="/democv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar.jpg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>VietNamese</div>
            <div>03/12</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
