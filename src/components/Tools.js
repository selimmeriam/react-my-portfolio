import React from 'react';
import './Tools.css';
function Tools() {
  return (
    <div className="tool-container">
      <div className="tools-container-wrap">
        <div className="tool-img-wrap">
          <div className="tool-card">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1Git9d2gyj2Tsubyv8ol80Ru1wpJ1kwRfnZpqlLKg0lrUbCe_CCC0xen-21bU-XCesA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="tool-img-wrap">
          <div className="tool-card">
            <img
              className="image"
              src="https://www.commvault.com/wp-content/uploads/2019/08/mongodb-logo2.jpg?quality=80&w=930"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="tools-container-wrap">
        <div className="tool-img-wrap">
          <div className="tool-card">
            <img
              className="image"
              src="https://logowik.com/content/uploads/images/bootstrap-text2820.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="tool-img-wrap">
          <div className="tool-card">
            <img
              className="image"
              src="https://cdn-images-1.medium.com/max/2050/1*BKssrX-qEmyN6YaRNTvNlw.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
