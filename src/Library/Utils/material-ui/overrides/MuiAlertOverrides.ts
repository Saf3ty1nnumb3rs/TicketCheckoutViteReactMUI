import { Components, Theme } from '@mui/material';

export const MuiAlertOverrides: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: {
      fontWeight: '600',
      color: 'white',
      boxShadow:
        '0px 3px 6px rgba(0, 0, 0, 0.25), 1px -2px 4px rgba(0, 0, 0, 0.14)',
    },
    icon: {
      marginRight: '1.25rem',
    },
    standardSuccess: {
      background: 'linear-gradient(279.5deg, #457B3B 73.16%, #345D2D 93.88%)',
    },
    standardError: {
      background: 'linear-gradient(279.5deg, #C23F38 73.16%, #92302A 93.88%)',
    },
    standardWarning: {
      background: 'linear-gradient(279.5deg, #DD742D 73.16%, #C1611F 93.88%)',
    },
    standardInfo: {
      background: 'linear-gradient(279.5deg, #3B87CB 73.16%, #2E71AD 93.88%)',
    },
  },
};
