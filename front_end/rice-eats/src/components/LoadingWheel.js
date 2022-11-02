import React from 'react';

import Text from './Text';
import { BeatLoader } from 'react-spinners';

export default function LoadingWheel() {
  return (
    <div>
      <BeatLoader color="#36d7b7"/>
      <Text>Loading.....</Text>
    </div>
  );
}