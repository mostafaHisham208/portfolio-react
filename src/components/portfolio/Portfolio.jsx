
import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import './portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState("everything");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const filterByCategory = (category) => {
    const filteredItems = category === "everything" ? Menu : Menu.filter(item => item.category === category);
    setItems(filteredItems);
    setActiveFilter(category);
  };

  const categories = ["everything", "react js", "angular", "react native"];

  return (
    <section className="work container section" id='work'>
      <h2 data-aos="fade-right" className="section__title">Recent Works</h2>
      
      <div className="work__filters">
        {categories.map(category => (
          <span
            key={category}
            className={`work__item ${activeFilter === category ? "active" : ""}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="work__container grid">
        {items.map(({ id, image, title, category, link, git }) => (
          <div data-aos="flip-right" className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt={title} className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <a href={link} target='_blank' rel="noopener noreferrer" className="work__button">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
            {git && (
              <a href={git} target='_blank' rel="noopener noreferrer" className="git__button">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;