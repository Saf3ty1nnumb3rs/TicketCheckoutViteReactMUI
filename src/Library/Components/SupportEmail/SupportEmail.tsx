import { styled } from '@mui/material';
import { SUPPORT_EMAIL } from 'Library/constants';

const Email = styled('a')`
  display: inline-block;
  padding-right: 0.5rem;
  height: 1.125rem;
  font-size: 0.875rem;
  text-decoration: none;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const SupportEmail = () => {
  return <Email href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</Email>;
};
