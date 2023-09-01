import { Stack, Typography } from '@mui/material';
import { FormattedNumber } from 'react-intl';

export const ValueLine = ({ label, value }: { label: string; value: number } ) => {
  return (
    <Stack direction="row"justifyContent="space-between">
      <Typography variant="body2">
        {label}
      </Typography>
      <Typography variant="body2">
        <FormattedNumber value={value} style="currency" currency="USD" />
      </Typography>
    </Stack>
  );
};