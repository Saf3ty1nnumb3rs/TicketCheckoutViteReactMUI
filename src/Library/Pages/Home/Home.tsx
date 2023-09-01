import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import Brody from 'Library/Images/Brody.png';
import TicketList from './Components/TicketList';
import { useIntl } from 'react-intl';
import SelectedTicketList from './Components/SelectedTicketsList';
import { Page } from 'Library/Components/Page';
import { useCartContext } from 'Library/Contexts/Cart';

const Home = () => {
  const { formatMessage } = useIntl();
  const { cartCount } = useCartContext();
  return (
    <Page
      sx={{
        backgroundImage: `url(${Brody})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={1}
      >
        <Grid item sm={12} md={7} lg={8}>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
          >
            <Stack pt="2rem">
              <Typography variant="h2" fontFamily="Roboto" pb="2rem" color="#FFFFFF">
                  {formatMessage({ id: 'selectYourTickets'})}
              </Typography>
              <Card>
                <Box height="75vh" overflow="auto">
                  <TicketList />
                </Box>
              </Card>
            </Stack>
          </Box>
        </Grid>
        <Grid item sm={12} md={5} lg={4}>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            minWidth="23.4375rem"
          >
            {cartCount > 0 && (
              <Stack pt="2rem">
                <Typography variant="h2" fontFamily="Roboto" pb="2rem" color="#FFFFFF">
                    {formatMessage({ id: 'selectedTickets'})}
                </Typography>
                <Card>
                  <Box height="32rem" overflow="auto">
                    <SelectedTicketList />
                  </Box>
                </Card>
              </Stack>
            )}
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
