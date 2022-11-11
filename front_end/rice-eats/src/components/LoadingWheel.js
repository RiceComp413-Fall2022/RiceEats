import React from 'react';

import { BeatLoader } from 'react-spinners';

export default function LoadingWheel() {
  return (
    <div>
      <BeatLoader size={50} color="#36d7b7"/>
      {/* <Text>Loading.....</Text> */}
    </div>
  );
}