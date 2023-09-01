import noop from 'lodash/noop';
import { Context, createContext, useContext } from 'react';

export interface AppModeContextInterface {
  appMode: 'light' | 'dark';
  onAppModeChange: () => void;
  setAppMode: (mode: AppMode) => void;
}

export const AppModeContext: Context<AppModeContextInterface> =
  createContext<AppModeContextInterface>({
    appMode: 'light',
    onAppModeChange: noop,
    setAppMode: noop,
  });

export const useAppMode = () => useContext(AppModeContext);
