import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export const TotalsSection = ({ children, header }: { children: ReactNode | ReactNode[]; header: string }) => {
  return (
    <Box mb="0.75rem">
      <Typography variant="h5">{header}</Typography>
      {children}
    </Box>
  );
};