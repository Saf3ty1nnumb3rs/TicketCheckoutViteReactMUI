import { Button, ButtonProps } from '@mui/material';
import { Link } from 'Library/Components/Link';
import { useMemo } from 'react';

const baseSx = {
  boxShadow: 'none',
  borderRadius: 40,
  height: '2.75rem',
  paddingX: '1.8rem',
};

export interface ActionButtonProps extends ButtonProps {
  href?: string;
  startIconFontSize?: string;
  endIconFontSize?: string;
}

export const ActionButtonBase = ({
  sx,
  variant = 'outlined',
  startIconFontSize,
  endIconFontSize,
  href,
  ...props
}: ActionButtonProps) => {
  const button = useMemo(() => {
    return (
      <Button
        role="button"
        variant={variant}
        sx={{
          ...baseSx,
          ...(startIconFontSize && {
            '.MuiButton-startIcon svg': {
              fontSize: startIconFontSize,
            },
          }),
          ...(endIconFontSize && {
            '.MuiButton-endIcon svg': {
              fontSize: endIconFontSize,
            },
          }),
          ...sx,
        }}
        {...props}
      >
        {props.children}
      </Button>
    );
  }, [endIconFontSize, props, startIconFontSize, sx, variant]);

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};
