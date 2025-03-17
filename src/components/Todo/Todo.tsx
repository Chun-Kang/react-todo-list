import { TodoItemProps } from '../../interface';
import EditForm from '../EditForm/EditForm';
import './Todo.css';
import { MdDelete, MdEdit } from "react-icons/md";


const Todo = ({ id, content, isCompleted, isEditing, deleteTodo, editTodo, toggleCompleted, toggleEditing }: TodoItemProps) => {
    return (
        isEditing ?
            <EditForm
                id={id}
                content={content}
                editTodo={editTodo}
            />
            :
            <div className={`todo ${isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(id) }}>{content}</p>
                <div>
                    <MdEdit
                        onClick={() => toggleEditing(id)}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => deleteTodo(id)}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>
            </div>
    );
}

export default Todo;
