import { SvgIcon, SvgIconProps } from '@mui/material';
import { useIconColors } from 'Library/Utils/icons/useIconColors';

export const PersonAvatarIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2992 3.81877C11.2992 1.71845 9.58075 0 7.48042 0C5.31645 0 3.59801 1.71845 3.59801 3.81877C3.59801 5.98274 5.31645 7.70119 7.48042 7.70119C9.58075 7.70119 11.2992 5.98274 11.2992 3.81877ZM8.78073 8.88921H6.33391C2.94648 8.88921 0.0429688 10.9216 0.0429688 13.262C0.0429688 16.9118 15.1521 16.9118 15.1521 13.262C15.1521 10.9216 12.1409 8.88921 8.78073 8.88921Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
