import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

/**
 * Use this component for linking to External page. If you need to take the user OUT of the app. Utilize this component.
 *
 * @example Routes to other applications or external websites can go through here.
 *
 * @param param0 Props for overriding the defaults or changing anything with the Link styling.
 */
export const ExternalLink = ({
  children,
  color = 'inherit',
  href,
  underline = 'none',
  ...rest
}: MuiLinkProps) => {
  return (
    <MuiLink color={color} underline={underline} href={href ?? '#'} {...rest}>
      {children}
    </MuiLink>
  );
};
