import { SvgIcon, SvgIconProps } from '@mui/material';
import { useIconColors } from 'Library/Utils/icons/useIconColors';

export const FacebookIcon = ({
  width = 16,
  height = 16,
  ...rest
}: SvgIconProps) => {
  const { fill } = useIconColors(rest);

  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      {...rest}
    >
      <path
        d="M7.31338 2.65667H8.77393V0.112667C8.52195 0.078 7.65535 0 6.6461 0C4.54028 0 3.09773 1.32467 3.09773 3.75933V6H0.773926V8.844H3.09773V16H5.94683V8.84467H8.17664L8.53061 6.00067H5.94616V4.04133C5.94683 3.21933 6.16814 2.65667 7.31338 2.65667Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
