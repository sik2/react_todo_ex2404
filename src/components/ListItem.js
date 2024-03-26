import { Link } from "react-router-dom";

function ListItem({todo, onDelete, onChecked}) {
    return (  
        <li key={todo.id}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => onChecked(todo.id)} 
            /> 
            {todo.id} / 
            <Link to={`/todos/${todo.id}`}>{todo.todo}</Link>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
    );
}

export default ListItem;