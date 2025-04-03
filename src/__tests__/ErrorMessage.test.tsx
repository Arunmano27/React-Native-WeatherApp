import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ErrorMessage from '../components/ErrorMessage';

test('renders error message', () => {
  const { getByText } = render(<ErrorMessage message="Something went wrong" />);
  expect(getByText('Something went wrong')).toBeTruthy();
});

test('calls onRetry when retry button is pressed', () => {
  const onRetryMock = jest.fn();
  const { getByText } = render(<ErrorMessage message="Error" onRetry={onRetryMock} />);
  
  fireEvent.press(getByText('Try Again'));
  expect(onRetryMock).toHaveBeenCalledTimes(1);
});
