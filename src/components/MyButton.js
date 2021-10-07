import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import './MyButton.css';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  fontWeight: 'bold',
  borderRadius: 15,
  textTransform: 'capitalize',
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[800],
  },
}));

function MyButton({ icon, text, onClick }) {
  return (
    <div className="button-component">
      <ColorButton onClick={onClick} variant="contained" endIcon={icon}>
        {text}
      </ColorButton>
    </div>
  );
}

export default MyButton;
