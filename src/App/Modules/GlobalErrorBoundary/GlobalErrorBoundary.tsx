import { Card, Stack, Typography } from '@mui/material';
import { BlueOutlineButton } from 'Library/Components/Buttons';
import { Page } from 'Library/Components/Page';
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { FormattedMessage } from 'react-intl';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Page>
      <Card sx={{ width: '75%', padding: '2rem', margin: 'auto' }}>
        <Stack alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            <FormattedMessage id="somethingWentWrong" />
          </Typography>
          <Typography fontSize=".75rem">
            {error.stack
              ?.split('\n')
              .map((line, index) => <pre key={index}>{line.trim()}</pre>)}
          </Typography>
          <BlueOutlineButton onClick={resetErrorBoundary}>
            <FormattedMessage id="reload" />
          </BlueOutlineButton>
        </Stack>
      </Card>
    </Page>
  );
};

export const GlobalErrorBoundary = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};
