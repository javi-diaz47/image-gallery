import React from "react";
import "./App.css";

export const App = (): JSX.Element => {
  console.log(import.meta.env.VITE_PEXEL_API_KEY);
  return (
    <div className="App">
      <h2>Hello, world!</h2>
    </div>
  );
};
