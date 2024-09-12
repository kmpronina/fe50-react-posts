import React from 'react';
import { Avatar, Typography } from '@mui/material';

interface Props {
  name: string;
  onClick?: () => void;
}
const UserName: React.FC<Props> = (props) => {
  const { name, onClick } = props;
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <Typography
      sx={{
        display: 'flex',
        flexDiraction: 'row',
        alignItems: 'center',
        gap: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Avatar {...stringAvatar(`${name}`)} />
      {`${name}`}
    </Typography>
  );
};

export default UserName;
