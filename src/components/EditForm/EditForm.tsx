import { FormEvent, useState } from 'react';
import './EditForm.css';
import { EditFormProps } from '../../interface';

const EditForm = ({ id, content, editTodo }: EditFormProps) => {

    const [newContent, setNewContent] = useState(content)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        editTodo(id, newContent);
    };
    return (
        <form className='create-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項" value={newContent}
                onChange={(e) => setNewContent(e.target.value)} />
            <button type="submit">Finish</button>
        </form>
    );
}

export default EditForm;
