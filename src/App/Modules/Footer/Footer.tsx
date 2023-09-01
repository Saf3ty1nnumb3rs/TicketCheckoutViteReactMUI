import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { ExternalLink } from 'Library/Components/Link';
import { dayjs } from 'Library/Utils/dates';
import { SUPPORT_EMAIL, TELEPHONE_NUMBER } from 'Library/constants';

const SocialMedia = () => {
  return (
    <Stack direction="row" alignItems="center">
      <ExternalLink
        href="https://www.linkedin.com/in/joshsample/"
        display="flex"
      >
        <LinkedInIcon
          data-testid="linkedin-icon"
          color="primary"
          fontSize="small"
        />
      </ExternalLink>
      <ExternalLink
        href="https://www.facebook.com/profile.php?id=4939410"
        target="_blank"
        display="flex"
      >
        <FacebookIcon
          data-testid="facebook-icon"
          color="primary"
          fontSize="small"
        />
      </ExternalLink>
      <ExternalLink
        href="https://twitter.com/baconsamples/"
        target="_blank"
        display="flex"
      >
        <TwitterIcon
          data-testid="twitter-icon"
          color="primary"
          fontSize="small"
        />
      </ExternalLink>
      <ExternalLink
        href="https://www.instagram.com/saf3ty1nnumb3rs/"
        display="flex"
        target="_blank"
      >
        <InstagramIcon
          data-testid="instagram-icon"
          color="primary"
          fontSize="small"
        />
      </ExternalLink>
    </Stack>
  );
};

export const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <AppBar
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        bottom: 0,
        top: '100%',
        position: 'sticky',
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: '2rem' }}>
        <Typography
          data-testid="copyright-section"
          color="text.primary"
          sx={{
            flexGrow: 1,
            display: 'flex',
            textAlign: 'center',
          }}
          variant="body2"
        >
          {formatMessage(
            { id: 'copyright_YEAR_JoshSampleAllRightsReserved' },
            { year: dayjs().format('YYYY') },
          )}
        </Typography>
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}>
          <ExternalLink
            data-testid="support-email"
            color="text.primary"
            href={`mailto:${SUPPORT_EMAIL}`}
            sx={{
              pr: 1,
              display: { sm: 'flex', md: 'block' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
            variant="body2"
          >
            {`${SUPPORT_EMAIL}`}
          </ExternalLink>
          <ExternalLink
            data-testid="support-phone"
            color="text.primary"
            href={`tel:${TELEPHONE_NUMBER}`}
            variant="body2"
            sx={{
              borderLeft: { xs: 0, md: 1 },
              borderColor: 'text.disabled',
              px: 1,
              display: { sm: 'flex', md: 'block' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {`${TELEPHONE_NUMBER}`}
          </ExternalLink>
        </Box>
        <SocialMedia />
      </Toolbar>
    </AppBar>
  );
};
