import { useMediaQuery } from '@mui/material';

export const DEFAULT_FULL_VIEW_BREAKPOINT = 768;

export const useIsFullSize = (minWidth = DEFAULT_FULL_VIEW_BREAKPOINT) => {
  const IS_FULL_VIEW_MEDIA_QUERY = `(min-width: ${minWidth}px)`;
  return useMediaQuery(IS_FULL_VIEW_MEDIA_QUERY);
};
