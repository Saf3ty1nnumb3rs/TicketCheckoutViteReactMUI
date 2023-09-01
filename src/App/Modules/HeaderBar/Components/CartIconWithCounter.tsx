import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartIconWithCounterProps {
  itemCount: number;
}

const CartIconWithCounter = ({ itemCount }: CartIconWithCounterProps) => (
  <IconButton color="inherit">
    <Badge badgeContent={itemCount} color="error">
      <ShoppingCartIcon color="info" sx={{ fontSize: '2rem' }} />
    </Badge>
  </IconButton>
);

export default CartIconWithCounter;
