import React from 'react'
//import Portf from '../components/Portf'
import PortfComp from '../components/PortfComp'
import './Portfolio.css'
function Portfolio() {
    return (
        <div className="portfolio-container">
         <div className="portfolio-section">

            <h3 className="portfolio-title"> Portfolio</h3>
              {/*<Portf/>*/}
              <PortfComp/>
            </div>
        </div>
    )
}

export default Portfolio
