import { renderWithProviders } from 'Library/Utils/test';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './Link';

describe('Link', () => {
  it('renders children', async () => {
    const methods = renderWithProviders(
      <MemoryRouter>
        <Link href="/">Hello</Link>
      </MemoryRouter>,
    );

    expect(methods.getByText('Hello')).toBeInTheDocument();
  });

  it('can navigate', async () => {
    const methods = renderWithProviders(
      <MemoryRouter>
        <Link href="/hello">Hello</Link>
      </MemoryRouter>,
    );

    const anchorTag = methods.container.querySelector('a');
    expect(anchorTag).toHaveAttribute('href', '/hello');
  });
});
