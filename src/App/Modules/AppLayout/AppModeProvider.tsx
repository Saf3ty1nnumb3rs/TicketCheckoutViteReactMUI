import { useState } from 'react';
import { useIntl } from 'react-intl';
import { AppModeContext } from 'Library/Contexts/AppMode';
import { useToast } from 'Library/Hooks/useToast/useToast';

export const AppModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [appMode, setAppMode] = useState<AppMode>('light');
  const { addToast } = useToast();
  const { formatMessage } = useIntl();
  const onAppModeChange = () => {
    addToast(formatMessage({ id: 'appHasUpdatedTo_MODE_mode' }, { mode: formatMessage({ id: appMode }) }), {
      variant: 'filled',
      severity: 'info',
    });
  };
  return (
    <AppModeContext.Provider value={{ appMode, onAppModeChange, setAppMode }}>
      {children}
    </AppModeContext.Provider>
  );
};
