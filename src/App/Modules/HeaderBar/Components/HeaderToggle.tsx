import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { useAppMode } from 'Library/Contexts/AppMode';
import { useCallback } from 'react';

export const HeaderToggle = () => {
  const { appMode, setAppMode } = useAppMode();
  const toggleTheme = useCallback(() => {
    setAppMode(appMode === 'light' ? 'dark' : 'light');
  }, [appMode]);
  const icon = appMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {icon}
    </IconButton>
  );
};
