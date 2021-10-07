import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading.js';
import Header from './components/Header.js';
import MobileHeader from './components/MobileHeader.js';
import SideBar from './components/SideBar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';
import Portfolio from './pages/Portfolio.js';
import './style.css';

export default function App() {
  const [matchs, setMatchs] = useState(
    window.matchMedia('(max-width: 490px)').matches
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
    setLoading(true);
    const handler = (e) => setMatchs(e.matches);
    window.matchMedia('(max-width: 490px)').addListener(handler);
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={3} ><SideBar/></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Router>
                {matchs ? <MobileHeader /> : <Header />}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/contact" component={Contact} />
                  {/*<Home/>
              <Resume/>
              <Portfolio/>*/}
                </Switch>
              </Router>
              <Footer />
            </Grid>
          </Grid>
        )}
      </Container>

      {/* 
      {loading? <Loading/>:(
     
        <Grid item xs={12} sm={12} md={4} lg={3} ><SideBar/></Grid>
        <Grid item  xs={12} sm={12} md={8} lg={8}>
          <Router>
            {matchs? <MobileHeader/>:<Header/>}
            
             
             <Route exact path="/resume"  component= {Resume} />
             <Route exact path="/portfolio"  component= {Portfolio} />
             <Route exact path="/contact"  component= {Contact} />
              
            
          </Router>
        
       }
   */}
    </>
  );
}
