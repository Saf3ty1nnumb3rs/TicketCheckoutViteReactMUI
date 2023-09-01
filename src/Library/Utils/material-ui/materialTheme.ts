/**
 * These are our overrides for the default MUI theme. To see the full theme and values to replace
 * follow the link below.
 * https://mui.com/material-ui/customization/default-theme/
 */

import { createTheme } from '@mui/material/styles';
import { componentOverrides } from '.';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#388e3c', // Green
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    grey: {
      '100': '#F2F1EF',
      '200': '#F2F3F8',
      '300': '#bfb8af', // workspace divider
      '700': '#60626C', // social icon grey
      '800': '#5F5753',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h2: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      fontWeight: '400',
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '19px',
      lineHeight: '2.5rem',
      fontWeight: '600',
      color: '#2C2D4A',
      letterSpacing: '1px',
    },
  },
...componentOverrides});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
      contrastText: '#000',
    },
    secondary: {
      main: '#ffcc80',
      contrastText: '#000',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
    grey: {
      '100': '#FAFAFA', // Lightest gray, almost white
      '200': '#F5F5F5', // Very light gray
      '300': '#E0E0E0', // Light gray for secondary text
      '700': '#757575', // Dark gray for icons or subheadings
      '800': '#616161', // Very dark gray, could be for main text
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h2: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      fontWeight: '400',
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '19px',
      lineHeight: '2.5rem',
      fontWeight: '600',
      color: '#ffffff',
      letterSpacing: '1px',
    },
  },
  ...componentOverrides});
