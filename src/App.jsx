import './App.css'
import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import InputComponent from './components/InputComponent'

function App() {

  const [newTodo, setNewTodo] = useState("")
  // const [input2, setInput2] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log("Hey, I have an empty deppendency array, I am excellent for fetching data...")
  }, [])

  useEffect(() => {
    console.log("I will run after every state change and the innitial loading of the page");
  })


  function handleSubmit(event) {
    event.preventDefault()
    setTodos([...todos, event.target.todoInput.value])
    // setTodos((prevState) => [...prevState, event.target.todoInput.value])
  }

  return (
    <main>
      <form className='TodoForm' onSubmit={(e) => { handleSubmit(e) }}>
        <InputComponent data={newTodo} setter={setNewTodo} />
        {/* <input name="todoInput2" className='TodoInput' onChange={(event) => setInput2(event.target.value)}/> */}
        <button type='submit' className='AddNewTodo'>Click me!</button>
        <TodoList todos={todos} />
      </form>
    </main>
  )
}

export default App
