import { SvgIcon, SvgIconProps } from '@mui/material';
import { useIconColors } from 'Library/Utils/icons/useIconColors';

export const LinkedInIcon = ({
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
        d="M15.7701 16.0001V15.9994H15.774V10.1314C15.774 7.26067 15.1648 5.04932 11.8562 5.04932C10.2657 5.04932 9.19834 5.93466 8.7626 6.774H8.71659V5.31732H5.57959V15.9994H8.84606V10.71C8.84606 9.31735 9.10633 7.97067 10.8066 7.97067C12.4819 7.97067 12.5069 9.56002 12.5069 10.7994V16.0001H15.7701Z"
        fill={fill}
      />
      <path
        d="M0.260742 5.31714H3.53116V15.9996H0.260742V5.31714Z"
        fill={fill}
      />
      <path
        d="M1.89415 0C0.84849 0 0 0.860667 0 1.92133C0 2.982 0.84849 3.86067 1.89415 3.86067C2.93981 3.86067 3.7883 2.982 3.7883 1.92133C3.78764 0.860667 2.93915 0 1.89415 0V0Z"
        fill={fill}
      />
    </SvgIcon>
  );
};
