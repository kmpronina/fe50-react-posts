import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';

interface Props extends ButtonProps {}

const InteractionButton: React.FC<Props> = (props) => {
  return <MuiButton sx={{ color: 'gray' }} {...props}></MuiButton>;
};
export default InteractionButton;
