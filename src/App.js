import React from 'react';
import Hello from './Hello';
// import './App.css';
import Wrapper from './Wrapper';

function App() {
  // let nameByLet = 'react test1';
  // const nameByConst = 'react test2';

  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
      <h2>123213</h2>
    </Wrapper>
  );
}

export default App;
