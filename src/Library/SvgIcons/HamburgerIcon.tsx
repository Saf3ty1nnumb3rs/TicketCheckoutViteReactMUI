import { SvgIcon, SvgIconProps } from '@mui/material';
import { useIconColors } from 'Library/Utils/icons/useIconColors';

export const HamburgerIcon = ({
  width = 26,
  height = 20,
  ...rest
}: SvgIconProps): React.ReactElement => {
  const { stroke } = useIconColors(rest);

  return (
    <SvgIcon
      {...rest}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="24.5"
        y2="1.5"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="17.75"
        x2="24.5"
        y2="17.75"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="9.625"
        x2="24.5"
        y2="9.625"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
