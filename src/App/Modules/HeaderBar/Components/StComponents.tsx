import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StHeader = styled('header')`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(329deg, #19413b 82.52%, #2eb7ab 97.52%);
  box-shadow:
    0px 0.5px 1.75px rgba(0, 0, 0, 0.039),
    0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
`;

export const StLink = styled(Link)`
  width: 14.5rem;
`;
