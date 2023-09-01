import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as RouterDomLink } from 'react-router-dom';

export const Link = ({
  children,
  color = 'inherit',
  href,
  underline = 'none',
  sx,
  ...rest
}: MuiLinkProps) => {
  return (
    <MuiLink
      component={RouterDomLink}
      color={color}
      underline={underline}
      to={href ?? '#'}
      href={href}
      sx={{
        ml: '1.1875rem',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiLink>
  );
};
