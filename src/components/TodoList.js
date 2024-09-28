import { useCallback } from "react";

// const TodoListItem = ({todo}) => {
//     const {text, checked} = todo;
//     return (
//         <div></div>
//     )
// }

    
    const TodoList = ({add, onRemove, onEdit}) => {
    
    return (
        <ol>
            {add.map((list, id) => (
            <li key={id}>{list}
            
            <button onClick={() => onRemove(id)}>DELETE</button>
            <button onClick={() => onEdit(id)}>EDIT</button>
            </li>
            ))}
        </ol>
    )
}
export default TodoList;