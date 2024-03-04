
export default function TodoForm({ handleSubmit }) {
    

    return (
        <form className="TodoForm-Container" onSubmit={handleSubmit}>
            <label htmlFor="todoLabel"></label>
            <input id="todoLabel" name="todoLabel"></input>
            <button type="submit">Add new Todo!</button>
        </form>
    )
}