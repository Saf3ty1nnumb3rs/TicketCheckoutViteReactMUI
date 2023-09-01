import { additionalColors } from 'Library/Utils/material-ui';
import { ActionButtonBase, ActionButtonProps } from '../ActionButton';

export const BlueOutlineButton = ({ sx, ...props }: ActionButtonProps) => {
  return (
    <ActionButtonBase
      color={props.disabled ? 'secondary' : 'info'}
      variant="outlined"
      sx={{
        color: additionalColors.ticketGrabBlue,
        border: `2px solid ${additionalColors.ticketGrabBlue}`,
        '&:hover': {
          border: `2px solid ${additionalColors.ticketGrabBlue}`,
        },
        '.MuiButton-endIcon svg': {
          fontSize: '12px',
        },
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </ActionButtonBase>
  );
};
