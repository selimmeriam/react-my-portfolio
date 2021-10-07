import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './ResTimeline.css';

const useStyles = makeStyles({
  timeline: {
    border: '1px solid transparent',
    marginTop: '0px',
  },
  timelineSeparator: {
    margin: 0,
    height: '110px',
  },
  iconDot: {
    padding: '13px',
    fontSize: 50,
  },
  connector: {
    backgroundColor: '#f0b0a4',
  },
});

function ResTimeline({ data, icon }) {
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
    <div className="restimeline-container">
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
                  <h3 className="restimeline-title">{el.title}</h3>
                </TimelineContent>
              </TimelineItem>

              <div className="pre-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h4 className="restimeline-name">{el.data.uno.name}</h4>
                    <h6 className="restimeline-dur">{el.data.uno.duration}</h6>
                    <p className="resttimeline-desc">{el.data.uno.desc}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
              <div className="pre-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h4 className="restimeline-name">{el.data.dos.name}</h4>
                    <h6 className="restimeline-dur">{el.data.dos.duration}</h6>
                    <p className="resttimeline-desc">{el.data.dos.desc}</p>
                  </TimelineContent>
                </TimelineItem>
              </div>
              <div className="pre-timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <ThemeProvider theme={theme}>
                      <TimelineDot variant="outlined" color="secondary" />
                    </ThemeProvider>
                  </TimelineSeparator>
                  <TimelineContent>
                    <h4 className="restimeline-name">{el.data.tres.name}</h4>
                    <h6 className="restimeline-dur">{el.data.tres.duration}</h6>
                    <p className="resttimeline-desc">{el.data.tres.desc}</p>
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

export default ResTimeline;
