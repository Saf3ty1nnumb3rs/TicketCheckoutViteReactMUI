import { Components, Theme } from '@mui/material';

export const MuiButtonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
  variants: [
    {
      props: { variant: 'table-text' },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        padding: 0,
        fontSize: '1rem',
        fontWeight: 'normal',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
  ],
};
