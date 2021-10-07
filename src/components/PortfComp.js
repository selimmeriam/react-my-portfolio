import React, { useState, useEffect } from 'react';
import PortfCard from '../components/PortfCard';
import { portCard } from '../DataArray';
import './PortfComp.css';
import MyButton from './MyButton';
import Looks3Icon from '@mui/icons-material/Looks3';

const allCategories = [...new Set(portCard.map((item) => item.category))];

function PortfComp() {
  const [data, setData] = useState(portCard);
  const [categories, setCategories] = useState(allCategories);
  const [maxRange, setMaxRange] = useState(3);
  const [flag, setFlag] = useState(0);

  const filterItems = (category) => {
    if (category === 'All') {
      setData(portCard);
      return;
    }
    const newItems = portCard.filter((item) => item.category === category);
    setData(newItems);
  };

  const loadMore = () => {
    if (flag === 1) return;
    setMaxRange((prevRange) => prevRange + 3);
    if (maxRange === 6) {
      setFlag(1);
    }
  };

  const cardComponent = data.slice(0, maxRange).map((el, index) => {
    return <PortfCard key={index} data={el} />;
  });

  useEffect(() => {
    var activeclass = document.querySelectorAll('#portfolio span');
    for (var i = 0; i < activeclass.length; i++) {
      activeclass[i].addEventListener('click', activateClass);
    }
    function activateClass(e) {
      for (var i = 0; i < activeclass.length; i++) {
        activeclass[i].classList.remove('active--portfolio');
      }
      e.target.classList.add('active--portfolio');
    }
  }, []);

  return (
    <div className="portfcomp-container">
      <div className="portf-card-wrap">
        <div className="portfolio--nav" id="portfolio">
          <span
            className="portfolio-item active--portfolio"
            onClick={() => filterItems('All')}
          >
            All
          </span>
          {categories.map((category, index) => {
            return (
              <span key={index}>
                <span
                  className="portfolio-item"
                  onClick={() => filterItems(category)}
                >
                  {category}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="all-portf-card bd-grid">{cardComponent}</div>
      <div className={flag ? 'card-button-container' : ' '}>
        <MyButton
          onClick={loadMore}
          text={'Load More'}
          icon={<Looks3Icon className="sidebar-button-icon" />}
        />
      </div>
    </div>
  );
}

export default PortfComp;
