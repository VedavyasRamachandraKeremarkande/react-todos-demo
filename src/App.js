import React, { useState } from "react"
import "./App.css"
import TodoTable from "./components/TodoTable"
import NewTodoForm from "./components/NewTodoForm"

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

  const addTodo = (description, assigned) => {
    let rowNumber = 0
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1
    } else {
      rowNumber = 1
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    }
    setTodos((todos) => [...todos, newTodo])
  }

  // const deleteTodo = (deleteTodoRowNumber) => {
  //   let filtered = todos.filter(
  //     (item) => item.rowNumber !== deleteTodoRowNumber
  //   )
  //   setTodos(filtered)
  // }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    })
    setTodos(filtered)
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button onClick={addTodo} className="btn btn-primary">
            Add new todos
          </button>
          <NewTodoForm addTodo={addTodo}></NewTodoForm>
        </div>
      </div>
    </div>
  )
}

export default App
