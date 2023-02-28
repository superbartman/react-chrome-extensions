import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/title';

const App: React.FC = () => {

  return (
    <>
      <Title />
    </>
  );
}

ReactDOM.render(
  <App />, document.getElementById('root')
);

