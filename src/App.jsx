import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([
    {label: "First todo", id: 1},
    {label: "Second todo", id: 2},
    {label: "Third todo", id: 3},
  ])

  const [displayTodos, setDisplayTodos] = useState(true)

  useEffect(() => {
    console.log("Mounted");

    return () => console.log("Unmounted");
  }, [])

  function handleSubmit(e) {
    try {
      e.preventDefault()

      // setTodos([...todos, { label: "Fourth todo", id: 4 }])
      setTodos((prevStates) => [...prevStates, { label: e.target.todoLabel.value, id: prevStates[prevStates.length-1].id +1 }])
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main>
      <TodoForm handleSubmit={handleSubmit} />
      {displayTodos ? <TodoList todos={todos} /> : null}
      <button onClick={() => setDisplayTodos(!displayTodos)}>Hide Todos</button>
    </main>
  )
}

export default App
