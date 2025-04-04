import React from "react";

const App = () => {
  const x = 10;
  return (
    <>
      <h1>Hello</h1>
      <span> World</span>
      <p>{x}</p>
      <p>{x + 5}</p>
      {x === 10 ? <p>True</p> : <p>False</p>}
      {x === 10 && <p>True</p>}
    </>
  );
};

export default App;
