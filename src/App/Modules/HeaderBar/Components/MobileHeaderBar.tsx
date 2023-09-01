import { ROUTES } from 'Library/Routes';
import { Link } from 'react-router-dom';
// import { HeaderToggle } from './HeaderToggle';
import CartIconWithCounter from './CartIconWithCounter';
import { Box } from '@mui/material';
import { useCartContext } from 'Library/Contexts/Cart';
/**
 * You may ask, why do you have two headers for this demo project instead of one dynamic header?
 * I plan to use this project for some future development with much more involved
 * user interactions including auth and different types of sidebar menus and dropdowns
 * depending on the device type.
 * Most components can be made dynamic and reusable across web and mobile, but this
 * particular component would be overly busy with a lot of conditional logic. Two components make sense for
 * this part of the layout modules.
 */
export const MobileHeaderBar = () => {
  const { cartCount } = useCartContext();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      flexGrow="1"
      px="2rem"
    >
      <Link to={ROUTES.ROOT}>
        <img src={'src/assets/react.svg'} alt="Logo" />
      </Link>
      <Link to={ROUTES.CHECKOUT}>
        <CartIconWithCounter itemCount={cartCount} />
      </Link>
      
      {/* <HeaderToggle /> uncover when done theming */}
    </Box>
  );
};
