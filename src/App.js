import logo from "./logo.svg"
import "./App.css"
import TodoTable from "./components/TodoTable"

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          {/* <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Feed dog</td>
                <td>Eric</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Get Haircut</td>
                <td>Eric</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ear Dinner</td>
                <td>Vyas</td>
              </tr>
            </tbody>
          </table> */}
          <TodoTable></TodoTable>
        </div>
      </div>
    </div>
  )
}

export default App
