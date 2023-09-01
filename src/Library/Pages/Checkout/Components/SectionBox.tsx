import { Box, Theme, Typography } from '@mui/material';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

import { Stack, SxProps } from '@mui/system';

interface SectionBoxProps {
  header: string;
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme>
}
export const SectionBox = ({
  header,
  children,
  sx,
}: SectionBoxProps) => {
  return (
    <Box
      sx={{
        border: '1px solid #000000',
        borderRadius: '0.5rem',
        backgroundColor: 'transparent',
        padding: '1rem',
        my: '0.5rem',
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography fontSize="1.5rem" px="0.5rem">{header}</Typography>
        <CheckCircleOutline color="success" sx={{ fontSize: '2rem' }} />
      </Stack>
      {children}
    </Box>
  )
};