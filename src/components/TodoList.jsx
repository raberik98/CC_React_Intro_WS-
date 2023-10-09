export default function TodoList({ todos }) {
  return (
    <div className="TodoList">
      {todos.length !== 0 ? (
        todos.map((oneTodo, index) => (
          <div key={`${index}+${oneTodo}`} className="TodoListItem">
            {oneTodo}
          </div>
        ))
      ) : (
        <h1>You don't have any todo</h1>
      )}
    </div>
  );
}
