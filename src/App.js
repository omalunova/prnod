import React from 'react';
import MyProps from "./components/MyProps/MyProps";
import Counter from "./components/Counter/Counter";

const App = () => {
    let name = 'alex'
    return (
        <div>
          <MyProps myName={name}/>
            <Counter/>
        </div>

    );
};

export default App;