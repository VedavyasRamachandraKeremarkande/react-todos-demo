function TodoRowItem(props) {
  /* const rowNumber = 1
  const rowDescription = "Feed dog"
  const rowAssigned = "Eric"

  console.log("prop values is ......")
  console.log(props) */

  return (
    <>
      <tr>
        <th scope="row">{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
      </tr>
    </>
  )
}

export default TodoRowItem
