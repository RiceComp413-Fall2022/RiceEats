import React, { useState } from 'react';

function Home() {
  const [yes_count, setCount] = useState(0);
  const [no_count, setCount2] = useState(0);
  return (
    <>
      <h2>Do you like Rice's food?</h2>
      <p>Yes was clicked {yes_count} times</p>
      <button onClick={() => setCount(yes_count + 1)}>Yes</button>

      <p>No was clicked {no_count} times</p>
      <button onClick={() => setCount2(no_count + 1)}>No</button>
    </>
  );
}

export default Home;
