import React, { useState } from 'react';
import ResTimeline from '../components/ResTimeline.js';
import { trabajoHistoria, educationHistoria } from '../DataArray';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Tools from '../components/Tools';
import './Resume.css';

function Resume() {
  const [data, setData] = useState(trabajoHistoria);
  const [edu, setEdu] = useState(educationHistoria);
  /*console.log(data, edu);*/
  return (
    <div className="resume-container">
      <div className="resume-section">
        <h3 className="resume-title"> Resume</h3>
        <div className="timeline-container-wrap">
          <div className="timeline-card">
            <ResTimeline data={data} icon={<WorkIcon />} />
          </div>
          <div className="timeline-card">
            <ResTimeline data={edu} icon={<AccountBalanceIcon />} />
          </div>
        </div>
      </div>

      <div className="project-section">
        <h3 className="resume-title"> Tools</h3>
        <Tools />
      </div>
    </div>
  );
}

export default Resume;
