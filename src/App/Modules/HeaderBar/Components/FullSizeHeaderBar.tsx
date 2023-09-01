import { Box, styled } from '@mui/material';
import { ROUTES } from 'Library/Routes';
import { StLink } from './StComponents';
import CartIconWithCounter from './CartIconWithCounter';
import { Link } from 'react-router-dom';
import { useCartContext } from 'Library/Contexts/Cart';

const Logo = styled('img')`
  margin-left: 0.9375rem;
`;

export const FullSizeHeaderBar = () => {
  const { cartCount } = useCartContext();
  return (
      <Box
        display="flex"
        justifyContent="space-between"
        height="100%"
        flexGrow="1"
        alignItems="center"
        px="2rem"
      >
        <StLink data-testid="ticket-grab-logo" to={ROUTES.ROOT}>
          <Logo src={'src/assets/react.svg'} alt="TicketGrab Logo" />
        </StLink>
        <Link to={ROUTES.CHECKOUT}>
          <CartIconWithCounter itemCount={cartCount} />
        </Link>
      </Box>
  );
};
