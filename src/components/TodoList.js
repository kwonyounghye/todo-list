import '../App.js'
import PropTypes from 'prop-types'

const TodoList = ({ add, handleRemove, handleEdit }) => {
  return (
    <ol>
      {add.map((items, id) => (
        <li key={id}>
          {items}
          <button onClick={() => handleRemove(id)}>DELETE</button>
          <button onClick={() => handleEdit(id)}>EDIT</button>
        </li>
      ))}
    </ol>
  )
}

TodoList.propTypes = {
  add: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

export default TodoList
