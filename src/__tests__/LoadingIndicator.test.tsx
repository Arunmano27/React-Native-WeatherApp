import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingIndicator from '../components/LoadingIndicator';

test('renders loading indicator with default text', () => {
  const { getByText } = render(<LoadingIndicator />);
  expect(getByText('Loading...')).toBeTruthy();
});
