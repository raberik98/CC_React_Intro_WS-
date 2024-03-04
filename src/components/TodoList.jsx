import TodoItem from "./TodoItem"
import { useEffect } from "react"

export default function TodoList({ todos }) {
    useEffect(() => {
        console.log("TodoList Mounted!");

        return () => console.log("TodoList UnMounted!");
    }, [])

    return(
        <div className="todoList">
            {
                todos ? todos.map((nextTodo) => <TodoItem key={nextTodo.id} todoLabel={nextTodo.label}/>) : <h1>No items found!</h1>
            }
        </div>
    )
}