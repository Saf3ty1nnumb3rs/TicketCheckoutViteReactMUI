import { render } from '@testing-library/react';
import { ActionButtonBase } from './ActionButtonBase';

describe('ActionButtonBase', () => {
  it('should render children', () => {
    const { getByText } = render(<ActionButtonBase>Hello</ActionButtonBase>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should let you click on stuff', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ActionButtonBase onClick={onClick}>Hello</ActionButtonBase>,
    );
    const button = getByText('Hello');
    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
