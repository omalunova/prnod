import React from 'react';
import MyProps from "./components/MyProps/MyProps";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
    let name = 'alex'
    return (
        <div>
          <MyProps myName={name}/>
            <Counter/>
            <TodoList/>
        </div>

    );
};

export default App;