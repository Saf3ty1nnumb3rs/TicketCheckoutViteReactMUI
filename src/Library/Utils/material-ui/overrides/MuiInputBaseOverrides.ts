import { Components, Theme } from '@mui/material';

export const MuiInputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: {
      borderRadius: '4px',
    },
  },
};
