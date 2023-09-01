import { Box, CssBaseline, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { HeaderBar } from 'App/Modules/HeaderBar';
import { Footer } from 'App/Modules/Footer/Footer';
import { useAppMode } from 'Library/Contexts/AppMode';
import { darkTheme, lightTheme } from 'Library/Utils/material-ui';
import { AppRoutes } from '../Setup/Routing/AppRoutes';
import { useMemo } from 'react';
import { CartProvider } from './CartProvider';
import { PaymentProvider } from './PaymentProvider';

export const AppLayout = () => {
  const { appMode } = useAppMode();

  const appTheme = useMemo(() => {
    return appMode === 'light' ? lightTheme : darkTheme
  }, [appMode])

  return(
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
          <CartProvider>
            <Stack minHeight={'100%'}>
              <HeaderBar />
              <Stack direction="row" flexGrow="1" minHeight={'100%'}>
                <Stack direction="column" flexGrow="1">
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <PaymentProvider>
                      <AppRoutes />
                    </PaymentProvider>
                  </Box>
                </Stack>
              </Stack>
              <Footer />
            </Stack>
          </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
