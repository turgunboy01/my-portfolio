import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+99 895 633 23 92",
    },
    {
      title: "Email",
      value: "Turgunboy.channel@gmail.com",
    },
    {
      title: "Telegram",
      value: "@Turgunboy_Mahmudjonov",
      link: "https://t.me/Turgunboy_Mahmudjonov",
    },
    {
      title: "Instagram",
      value: "devsenyor",
      link: "https://www.instagram.com/devsenyor/",
    },
    {
      title: "Github",
      value: "turgunboy01",
      link: "https://github.com/turgunboy01",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        You can reach me via email, phone, or contact form. I'm available for
        any questions or support you might need.{" "}
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <a href={value?.link} target="_blank">
              {value.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
