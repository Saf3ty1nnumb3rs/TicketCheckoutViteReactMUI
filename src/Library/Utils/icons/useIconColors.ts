import { SvgIconProps, useTheme } from '@mui/material';

export interface UseIconColors {
  fill: string;
  stroke: string;
}

export const useIconColors = ({ fill, stroke }: SvgIconProps) => {
  const theme = useTheme();
  const fillColor = fill || theme.palette.text.primary || '';
  const strokeColor = stroke || theme.palette.text.primary || '';
  return {
    fill: fillColor,
    stroke: strokeColor,
  };
};
