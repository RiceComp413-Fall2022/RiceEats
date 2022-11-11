import React from 'react';
import Button from './Button';
import Text from './Text';

export default function NoDataError(props) {
  const resetErrorBoundary = props.resetErrorBoundary;
  return (
    <div>
      <Text>No data found. Oops.</Text>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  )
}