import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

const TestComp = ({ isAllowed }: { isAllowed?: boolean }) => {
  return (
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute isAllowed={!!isAllowed}>
              <div>Protected</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProtectedRoute', () => {
  it('can redirect to a different path', async () => {
    const { findByText } = render(<TestComp isAllowed={false} />);
    expect(await findByText('Dashboard')).toBeInTheDocument();
  });

  it('lets you see protected routes', async () => {
    const { findByText } = render(<TestComp isAllowed />);
    expect(await findByText('Protected')).toBeInTheDocument();
  });
});
