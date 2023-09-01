import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Alert, AlertProps, CircularProgress, Typography } from '@mui/material';
import { OptionsObject, useSnackbar } from 'notistack';
import { ReactNode, useCallback } from 'react';

const ToastIcons: Record<AlertColor, React.ReactNode> = {
  error: <ErrorOutlineOutlinedIcon />,
  info: <InfoOutlinedIcon />,
  success: <CheckCircleOutlineIcon />,
  warning: <WarningAmberIcon />,
  loading: (
    <CircularProgress
      size="1.25rem"
      sx={{ color: 'white', alignSelf: 'center' }}
    />
  ),
};

type AddToastProps = Omit<OptionsObject, 'variant'> & {
  variant?: AlertProps['variant'];
  severity?: AlertColor;
};

/**
 * Hook for displaying toasts using Notistack and Material UI.
 * Returns a function `addToast` that can be called to display a toast.
 * The `addToast` function takes a message and an optional toast options object variant and severity
 * @returns {function} The `addToast` function that can be called to display a toast.
 *
 * @example
 * const { addToast } = useToast();
 * addToast('Hello world!', { variant: 'filled', severity: 'info' });
 */

export const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const computeSeverity = useCallback((severity: AlertColor) => {
    if (severity === 'loading') {
      return 'info';
    }

    return severity ?? 'info';
  }, []);
  const addToast = useCallback(
    (message: ReactNode, toastOptions?: AddToastProps) => {
      const {
        variant = 'filled', // MUI Alert
        severity = 'info', // Notistack severity
        ...rest
      } = toastOptions ?? ({} as AddToastProps);
      return enqueueSnackbar(message, {
        content: (key) => (
          <Alert
            key={key}
            variant={variant}
            severity={computeSeverity(severity)}
            icon={ToastIcons[severity]}
            onClose={() => {
              closeSnackbar(key);
            }}
          >
            <Typography sx={{ marginRight: '2.5rem' }}>{message}</Typography>
          </Alert>
        ),
        ...rest,
      });
    },
    [enqueueSnackbar, computeSeverity, closeSnackbar],
  );

  return { addToast, closeSnackbar };
};
