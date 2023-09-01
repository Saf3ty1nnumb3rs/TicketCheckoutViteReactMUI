import { fireEvent, render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { useToast } from './useToast';

const MockComponent = () => {
  const { addToast } = useToast();
  const handleClick = () => {
    addToast('Hello World', {
      variant: 'filled',
      severity: 'info',
    });
  };
  return <button onClick={handleClick}>Click me</button>;
};

describe('useToast', () => {
  it('can add and remove toast', () => {
    render(
      <SnackbarProvider>
        <MockComponent />
      </SnackbarProvider>,
    );

    fireEvent.click(screen.getByText('Click me'));

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
