import React from "react";
import "./App.css";

const App = () => {


  const testArr = ['박준형','윤계상', '데니 안', '손호영', '김태우'];

  return (
    <div className="app-style">
      {testArr.map((item) =>{
        return <div className="component-style">{item}</div>;
      })}
    </div>
  );
};

export default App;
