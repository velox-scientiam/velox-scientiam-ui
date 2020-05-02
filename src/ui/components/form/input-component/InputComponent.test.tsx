import React, { FunctionComponent } from 'react';
import { render } from '@testing-library/react';

import { InputComponentProps } from '../../../../interfaces/form/form.interface';
import InputComponent from './InputComponent';

const renderComponent = (
  props: Partial<InputComponentProps> = {},
): FunctionComponent => {
  const handler = jest.fn();
  const defaultProps: InputComponentProps = {
    value: 'username',
    inputHandler: handler,
    name: 'username',
    label: 'User name',
    errorMessage: '',
    isAutoFocused: true,
  };

  return render(<InputComponent {...defaultProps} {...props} />);
};

describe('InputComponent', () => {
  it('renders without crashing', (): void => {
    const component = renderComponent();

    expect(component).not.toBeNull();
  });
});
