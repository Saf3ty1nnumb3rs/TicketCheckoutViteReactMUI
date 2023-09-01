import { messagesEn } from 'Library/Messages';
import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

export const withIntlHoc = (
  children: ReactElement,
  intlProviderProps?: Partial<React.ComponentProps<typeof IntlProvider>>,
) => {
  return (
    <IntlProvider locale={'en'} messages={messagesEn} {...intlProviderProps}>
      {children}
    </IntlProvider>
  );
};
