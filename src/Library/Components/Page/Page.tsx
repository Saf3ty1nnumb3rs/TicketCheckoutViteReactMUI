import { Box, BoxProps, SxProps, Theme } from '@mui/material';
import { useIsFullSize } from 'Library/Hooks/useIsFullSize';

const withSidePanelSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1',
  position: 'relative',
};
export const Page = ({
  sx,
  isPanelOpen,
  withSidePanel,
  ...props
}: BoxProps & { isPanelOpen?: boolean; withSidePanel?: boolean }) => {
  const isFullSize = useIsFullSize();

  return (
    <Box
      data-testid="page"
      sx={{
        ...(isFullSize
          ? {
              pt: '1.5rem',
              pl: '3.125rem',
              pr: '3.125rem',
              pb: '1.5rem',
            }
          : {
              pt: '1.8rem',
              pl: '1.4rem',
              pr: '1.4rem',
              pb: '1.4rem',
            }),
        ...(withSidePanel ? { ...withSidePanelSx } : {}), // for future side panels
        ...(isPanelOpen ? { pr: '0rem' } : {}), // for future side panels
        ...sx,
      }}
      {...props}
    />
  );
};
