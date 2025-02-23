import TodoRowItem from "./TodoRowItem"

const TodoTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
          </tr>
        </thead>
        <tbody>
          <TodoRowItem></TodoRowItem>
        </tbody>
      </table>
    </>
  )
}

export default TodoTable
