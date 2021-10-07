import React from 'react';
import Slider from 'react-slick';
import './Testmonials.css';

function Testmonials() {
  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="test-container">
      <div className="test-wrap">
        <Slider {...settings}>
          <div className="test-card">
            <div className="test-card-wrap">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_Efn3uPwHIuIM7gynMoiSGOS5KJr1bJcXabMwa-MxVKzu-YkW8c_V8K0ZVJ6-FLU7ag&usqp=CAU"
                alt=""
                className="test-img"
              />
              <h3 className="test-title">A. Ali</h3>
              <span className="test-client">Instructor</span>
              <p className="test-desc">
                Great Developer! She finished work wonderfully and just in time.
                Thanks you.
              </p>
            </div>
          </div>
          <div className="test-card">
            <div className="test-card-wrap">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ_4zgnQg8H3norRBqrcLn2mTYIV4SDfkhS5tIrXTk8aNUmefeA8ZYmKqgacPKl1r3ow&usqp=CAU"
                alt=""
                className="test-img"
              />
              <h3 className="test-title">M. Nobar</h3>
              <span className="test-client">Manager</span>
              <p className="test-desc">
                She is a talented trainer, good listener and fast learner. I
                recommend her.
              </p>
            </div>
          </div>
          <div className="test-card">
            <div className="test-card-wrap">
              <img
                src="https://t3.ftcdn.net/jpg/02/31/19/64/360_F_231196474_IT7zKhOFyJCqEJr3b9huL4W0ODVWsZd0.jpg"
                alt=""
                className="test-img"
              />
              <h3 className="test-title">N. Badr</h3>
              <span className="test-client">Business Owner</span>
              <p className="test-desc">
                Our website design and performance look great. Thanks Meriam
              </p>
            </div>
          </div>
          <div className="test-card">
            <div className="test-card-wrap">
              <img
                src="https://us.123rf.com/450wm/kritchanut/kritchanut1308/kritchanut130800058/21738693-rosa-femminile-foto-avatar-vettore.jpg?ver=6"
                alt=""
                className="test-img"
              />
              <h3 className="test-title">A. Ahmed</h3>
              <span className="test-client">CSR</span>
              <p className="test-desc">
                Meriam is a very creative and talented collegue. I do not
                hesitate to work again with her.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testmonials;
