import React from 'react';
// import Hello from './Hello';
import './App.css';
// import Wrapper from './Wrapper';
import Counter from './Counter';
import Container from './Container';

function App() {
  const style = {
    App: {
      backgroundColor : "black",
    },
    h2: {
      color: "red",
    },
    bold_test:{
      color: "green",
    },
  };

  const counterProps = {
    initProp: 5,
    otherProp: 7,
    endProp : 9,
    initialValue:11
  }

  return (
    // <div style={style.bold_test}>
    <Container >
      <div>
        <Counter {...counterProps} />
      </div>
    </Container >

  );
}

export default App;
