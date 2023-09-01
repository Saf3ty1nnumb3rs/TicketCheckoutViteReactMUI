import { lazy } from 'react';

/**
 *
 * This file collects all the lazy loaded route components.
 * React.lazy only works with default exports
 *
 * https://reactjs.org/docs/code-splitting.html
 *
 */
export const CheckoutPage = lazy(() => import('Library/Pages/Checkout/CheckoutPage'));
export const Home = lazy(() => import('Library/Pages/Home/Home'));
