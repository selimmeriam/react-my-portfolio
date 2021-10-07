import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './TimeLine.css';

const useStyles = makeStyles({
  timeline: {
    border: '1px solid tranceperant',
    marginTop: '-50px',
  },
  timelineSeparator: {
    margin: 0,
    height: '120px',
  },
  iconDot: {
    padding: '13px',
    fontSize: 50,
  },
  connector: {
    backgroundColor: '#f0b0a4',
  },
});

function TimeLine({ data, icon }) {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const classes = useStyles();

  return (
    <div className="timeline-container">
      <Timeline position="right" className={classes.timeline}>
        {data.map((el, index) => {
          return (
            <div key={index} className="timeline">
              <TimelineItem>
                <TimelineSeparator className={classes.timelineSeparator} my={0}>
                  <ThemeProvider theme={theme}>
                    <TimelineDot color="secondary" className={classes.iconDot}>
                      {icon}
                    </TimelineDot>
                  </ThemeProvider>
                  <TimelineConnector className={classes.connector} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6"></Typography>
                </TimelineContent>
              </TimelineItem>

              <div className="sec-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <span className="side-title">Name: </span>
                    <p>{el.name}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
              <div className="sec-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <span className="side-title">Job: </span>
                    <p>{el.job}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
              <div className="sec-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <span className="side-title">E-mail: </span>
                    <p>{el.email}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
              <div className="sec-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                  </TimelineSeparator>
                  <TimelineContent>
                    <span className="side-title">Tele: </span>
                    <p>{el.tele}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
            </div>
          );
        })}
      </Timeline>
    </div>
  );
}

export default TimeLine;
