import { useIsFullSize } from 'Library/Hooks/useIsFullSize';
import { FullSizeHeaderBar, MobileHeaderBar, StHeader } from './Components';

export const HeaderBar = () => {
  const isFullSize = useIsFullSize(1020);

  // see mobile header for explanation of two components
  const testid = isFullSize ? 'full-size-header-bar' : 'mobile-header-bar';

  return (
    <StHeader
      data-testid={testid}
    >
      {isFullSize ? <FullSizeHeaderBar /> : <MobileHeaderBar />}
    </StHeader>
  );
};
