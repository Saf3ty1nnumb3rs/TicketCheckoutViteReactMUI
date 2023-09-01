import { ActionButtonBase, ActionButtonProps } from '..';

const  HoverButton = ({ sx, ...props }: ActionButtonProps) => {
  return (
    <ActionButtonBase
      color={props.disabled ? 'secondary' : 'info'}
      variant="text"
      sx={{
        textTransform: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          textDecoration: 'underline',
        },
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </ActionButtonBase>
  );
}

export default HoverButton;
