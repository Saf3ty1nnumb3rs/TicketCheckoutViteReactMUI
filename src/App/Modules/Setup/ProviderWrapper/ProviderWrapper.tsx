import { messages } from 'Library/Messages';
import { SnackbarProvider } from 'notistack';
import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { AppModeProvider } from '../../AppLayout/AppModeProvider';

interface ProviderWrapperProps {
  children: ReactElement;
  locale: SupportedLocales;
}

export const ProviderWrapper = ({ locale, children }: ProviderWrapperProps) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Why does this 'ProviderWrapper' look so sparse?
   * You have FullStory? Wrap it here. You have LaunchDarkly? Wrap it here. You have Keycloak or some other auth? Wrap it here.
   * You have axios or use-http? Wrap it. You have a custom provider? Wrap it here if it makes sense. You get the idea.
   * This is the business layer that needs to be ready before your app can render. This is just a demo so we'll forgo
   * many of these functionalities for the time being.
   * Once you are authorized, you can render an authorization layer (admin, user, visitor) that chooses which components and routes to render depending on
   * you applications needs.
   */
  return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <AppModeProvider>
              {children}
          </AppModeProvider>
        </SnackbarProvider>
      </IntlProvider>
  );
};
