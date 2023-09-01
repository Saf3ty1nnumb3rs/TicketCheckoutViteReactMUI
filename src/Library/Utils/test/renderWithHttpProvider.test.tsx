import { renderWithProviders } from './renderWithProviders';

jest.mock('use-http', () =>
  jest.fn().mockImplementation(() => ({
    response: {
      ok: true,
      data: { data: [] },
    },
    get: jest.fn().mockResolvedValue(Promise.resolve()),
    loading: false,
  })),
);
describe('renderWithHttpProvider', () => {
  it('renderWithProviders should work if use-http is mocked', () => {
    const methods = renderWithProviders(<div>Test</div>);
    expect(methods.getByText('Test')).toBeInTheDocument();
  });
});
