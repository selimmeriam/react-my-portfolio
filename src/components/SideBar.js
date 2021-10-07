import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TimeLine from './TimeLine';
import MyButton from './MyButton';
import React, { useState } from 'react';
import './SideBar.css';
import { profileData } from '../DataArray';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function SideBar() {
  const [data, setData] = useState(profileData);

  const theme = createTheme({
    typography: {
      fontFamily: 'Stick No Bills , Oswald ,Lato, Arial',
      fontSize: 25,
      fontWeight: 600,
    },
  });
  return (
    <div className="sidebar-container container--shadow">
      {data.map((el, index) => {
        return (
          <div key={index}>
            <div className="sidebar-overview">
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  my={1}
                  className="sidebar-name"
                  lineHeight={1}
                >
                  {el.name}
                </Typography>
              </ThemeProvider>

              <Typography className="sidebar-job">{el.title}</Typography>
            </div>
            <figure className="sidebar-img">
              <img src={el.img} alt="meriam-selim-imag" />
            </figure>
          </div>
        );
      })}

      <div className="sidebar-info">
        <TimeLine data={data} icon={<AccountCircleIcon />} />
        <br />

        <a
          href="/google-link"
          target="_blank"
          download
          className="sidebar-link"
        >
          <MyButton
            text={'Download Cv'}
            icon={<DownloadForOfflineIcon className="sidebar-button-icon" />}
          />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
