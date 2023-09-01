import GlobalErrorBoundary from 'App/Modules/GlobalErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'Library/Routes';
import { CheckoutPage, Home } from './LazyLoadedPages';
import { Suspense } from 'react';
/**
 *
 * Please lazy load your route element components in the LazyLoadedPages.tsx file.
 *
 */


export const StandardRoutes = () => {
  // we can provide Lazy Loaded components here within the Suspense
  // Global Error Boundary prevents catastrophic failures in the even something slips through th cracks
  return (
    <GlobalErrorBoundary>
      <Suspense fallback={<div />}>
        <Routes>
          {/* placeholder redirect until we have a dashboard */}
          <Route index element={<Home />} />
          <Route path={ROUTES.CHECKOUT}>
            <Route index element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </GlobalErrorBoundary>
  );
};

export const AppRoutes = () => {
  // you can provide different sets of routes for different user types here
  // this way you can protect only certain routes when needed in stead of having all of the routes piled on
  return <StandardRoutes />;
};
