import React, { ReactElement } from 'react';
import ChangeBgColor from './ui/components/post-board/index';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Hello Documents World!
      </h1>

      <ChangeBgColor />
    </div>
  );
};

export default App;
