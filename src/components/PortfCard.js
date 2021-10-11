import React, { useState, forwardRef, useEffect } from 'react';
import $ from 'jquery';

import MyButton from './MyButton';
import Sliding from './Sliding';
import LaunchIcon from '@mui/icons-material/Launch';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './PortfCard.css';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#eeeeee',
      main: '#424242',
      dark: '#212121',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function PortfCard({ data }) {
 

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    $('.hover').mouseleave(function () {
      $(this).removeClass('hover');
    });
  }, []);

  return (
    <div className="portf-card-container">
      <div className="portf-card" onClick={handleClickOpen}>
        <div className="portcard-container">
          <figure className="snip1205">
            <img className="card-img" src={data.imag} alt="" />
            {/*<DescriptionIcon className='icon'/>*/}
            <div className="icon">
              <DescriptionIcon fontSize="large" className="desc-icon" />
              {/*<i className="far fa-file-alt "></i>*/}
            </div>
          </figure>

          <h3 className="card-title">{data.title}</h3>
          <p className="card-desc">{data.desc}</p>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ThemeProvider theme={theme}>
          <AppBar sx={{ position: 'fixed' }} color="secondary">
            <Toolbar className="toolbar-container">
              <IconButton
                edge="end"
                color="primary"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <div className="dialog-container">
          <h1 className="dialog-title">{data.title}</h1>
          <div className="dialog-img">
            <img src={data.imag} alt="" />
          </div>
          <div className="dialog-desc">
            <h3 className="dialog-title-project"> About Project</h3>
            <p className="dialog-desc-project">{data.longDesc}</p>
          </div>
          <Sliding img={data.allimg} />
          <div className="launch-button">
            <a
              className="link"
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MyButton text={'Launch Project'} icon={<LaunchIcon />} />
            </a>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default PortfCard;
