import { ThemeOptions } from '@mui/material';
import { MuiAlertOverrides } from './overrides/MuiAlertOverrides';
import { MuiButtonOverrides } from './overrides/MuiButtonOverrides';
import { MuiInputBaseOverrides } from './overrides/MuiInputBaseOverrides';

export const componentOverrides: { components: ThemeOptions['components'] } = {
  components: {
    MuiButton: MuiButtonOverrides,
    MuiInputBase: MuiInputBaseOverrides,
    MuiAlert: MuiAlertOverrides,
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3F4F7',
        },
      },
    },
  },
};
