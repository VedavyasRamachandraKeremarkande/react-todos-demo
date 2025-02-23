import React, { useState } from "react"
import "./App.css"
import TodoTable from "./components/TodoTable"

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User One",
    },
  ])

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "new todo",
        rowAssigned: "user five",
      }
      setTodos((todos) => [...todos, newTodo])
      //console.log(todos)
    }
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos}></TodoTable>
          <button onClick={addTodo} className="btn btn-primary">
            Add new todos
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
