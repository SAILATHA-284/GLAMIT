import React from "react";
import "./cards.css";

import Img1 from "./assets/1.jpg";
import Img2 from "./assets/3.jpg";
import Img3 from "./assets/Pfp2.jpg";
import Img4 from "./assets/dress.jpg";

import Pfp1 from "./assets/Pfp4.jpg";
import Pfp2 from "./assets/Pfp3.jpg";
import Pfp3 from "./assets/Pfp2.jpg";
import Pfp4 from "./assets/OIP.jpeg";

const Glamboard = () => {
  const cards = [
    {
      img: Img1,
      profile: Pfp1,
      title: "Aryan",
      status: "1 hour ago",
      description: "Slayyy fashion",
      link: "https://www.myntra.com/jackets/wildcraft/wildcraft-water-resistant-sporty-jacket/24560632/buy",
    },
    {
      img: Img2,
      profile: Pfp2,
      title: "Rameez",
      status: "3 hours ago",
      description: "Cool",
      link: "https://www2.hm.com/en_in/productpage.0976641027.html",
    },
    {
      img: Img3,
      profile: Pfp3,
      title: "Shanya",
      status: "1 hour ago",
      description: "Core",
      tagline: "Beauty",
      link: "https://www2.hm.com/en_in/productpage.1187872004.html",
    },
    {
      img: Img4,
      profile: Pfp4,
      title: "Sailatha",
      status: "3 hours ago",
      description: "Stylish",
      link: "https://www.ajio.com/find/Orange-Kurti?query=%3Arelevance%3Averticalcolorfamily%3AOrange",
    },
  ];

  return (
    <div>
      <h1>GlamBoard</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <a href={card.link} className="card" target="_blank" rel="noopener noreferrer">
              <img src={card.img} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src={card.profile} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">{card.title}</h3>
                    {card.tagline && <span className="card__tagline">{card.tagline}</span>}
                    <span className="card__status">{card.status}</span>
                  </div>
                </div>
                <p className="card__description">{card.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glamboard;
