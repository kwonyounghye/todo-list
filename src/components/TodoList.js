// import { useCallback } from 'react'

// const TodoListItem = ({todo}) => {
//     const {text, checked} = todo;
//     return (
//         <div></div>
//     )
// }

const TodoList = ({ add, handleRemove, handleEdit }) => {
  return (
    <ol>
      {add.map((list, id) => (
        <li key={id}>
          {list}
          <button onClick={() => handleRemove(id)}>DELETE</button>
          <button onClick={() => handleEdit(id)}>EDIT</button>
        </li>
      ))}
    </ol>
  )
}
export default TodoList
