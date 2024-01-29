import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Test from "./components/Test";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showTest, setShowTest] = useState(true);
  const [showFOrm, setShowForm] = useState(false);

  useEffect(() => {
    console.log("Valami, useEffect");

    return () => {
      console.log("Unmount");
    };
  }, []);

  // useEffect(() => {
  //   console.log("State has changed!");
  // })

  useEffect(() => {
    if (todos.length > 0 && showTest == false) {
      setShowForm(true);
    }
  }, [showTest, todos]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((prevState) => {
      return [...prevState, e.target.newTodo.value];
    });
  }

  function handleTest() {
    setShowTest(!showTest);
  }

  function handleReplace() {
    setTodos([...todos.sort((a, b) => a.localeCompare(b))]);
  }
  console.log(todos);

  if (!showFOrm) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newTodoInput">Your new Todo:</label>
          <input name="newTodo" id="newTodoInput" type="text"></input>
          <button type="submit">Register todo!</button>
        </form>
        {todos.length == 0 ? (
          <h1>You don't have any todos</h1>
        ) : (
          todos.map((nextTodo, index) => (
            <Todo key={nextTodo + index} todoString={nextTodo}></Todo>
          ))
        )}
        <button onClick={handleReplace}>Replace</button>
        <button onClick={handleTest}>Test</button>
        {showTest ? <Test></Test> : null}
      </div>
    );
  }

  if (showFOrm) {
    return <div>
      {todos.length == 0 ? (
        <h1>You don't have any todos</h1>
      ) : (
        todos.map((nextTodo, index) => (
          <Todo key={nextTodo + index} todoString={nextTodo}></Todo>
        ))
      )}
      <button onClick={handleReplace}>Replace</button>
      <button onClick={handleTest}>Test</button>
      {showTest ? <Test></Test> : null}
    </div>;
  }
}

export default App;
