import React from 'react';

import { ROUTES } from 'Library/Routes';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactElement;
  isAllowed: boolean;
  redirectPath?: string;
}

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = ROUTES.ROOT,
  children,
}: ProtectedRouteProps): React.ReactElement => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
