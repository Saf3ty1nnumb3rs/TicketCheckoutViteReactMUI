import { RenderResult, render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';

import { messages } from 'Library/Messages';
import { Fragment, ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

/**
 * Wraps your component with a provider config/intl provider, keycloak, and snackbarproviders.
 * Optionally you can wrap with with a MemoryRouter if you are using react-router-dom methods.
 *
 * @export
 * @param {ReactElement} children
 * @param {{ locale?: SupportedLocales; renderWithMemoryRouter?: boolean }} [opts]
 * @return {*}  {RenderResult}
 */
export function renderWithProviders(
  children: ReactElement,
  opts?: {
    locale?: SupportedLocales;
    renderWithMemoryRouter?: boolean;
    featureFlags?: Record<string, boolean>;
  },
): RenderResult {
  const locale = opts?.locale || 'en';

  const RouterComp = opts?.renderWithMemoryRouter ? MemoryRouter : Fragment;

  return render(
    <RouterComp>
      <IntlProvider locale={locale} messages={messages[locale]}>
          <SnackbarProvider>{children}</SnackbarProvider>
      </IntlProvider>
    </RouterComp>,
  );
}
