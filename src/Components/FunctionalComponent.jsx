import React, { useState } from "react";

function Welcome() {
  return (
    <React.Fragment>
      <h1>Welcome Component</h1>
      <h2>Functional Component Demo</h2>
      <h3>Vite Application</h3>
      <Welcome1 />
    </React.Fragment>
  );
}

function Welcome1() {
  return (
    <>
      <h3>Welcome1 Component</h3>
      <Welcome2 />
    </>
  );
}

function Welcome2() {
  return (
    <>
      <h3>Welcome2 Component</h3>
      <WelcomeState/>
    </>
  );
}

function WelcomeState() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <h3>State in Functional Component</h3>
      <h2>Fun Comp - Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  );
}

export default Welcome;
