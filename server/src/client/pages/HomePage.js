import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Title</h1>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </div>
  );
};

export default { component: Home };
