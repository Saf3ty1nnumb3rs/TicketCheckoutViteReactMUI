import { SvgIconProps, css, styled } from '@mui/material';

export const withHover = (
  Component: React.ComponentType<SvgIconProps>,
  opts: { color?: string; stroke?: boolean } = {},
) => {
  return styled(Component)(({ theme }) => {
    const color = opts.color || theme.palette.text.secondary;
    return css`
      &:hover {
        cursor: pointer;
        path,
        line {
          fill: ${color};
          stroke: ${opts.stroke ? color : 'none'};
        }
      }
    `;
  });
};
