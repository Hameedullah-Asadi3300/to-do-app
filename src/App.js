import React, { useState } from 'react';
import Header from './Components/Header.js';
import Form from './Components/Form.js';
import TodoList from './Components/TodoList.js';


function App() {

  const [todo, setTodo] = useState("")          //  An empty todo item
  const [todoList, setTodoList] = useState([])  //  An empty list of array
  return (
    <div className="App">
        <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}>
      </Form>
      <TodoList setTodoList={ setTodoList} todoList={todoList} />
    </div>
  );
}


//  Exported the App by default
export default App;
