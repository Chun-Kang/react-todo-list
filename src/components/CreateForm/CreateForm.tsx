import { FormEvent, useState } from 'react';
import './CreateForm.css';
import { CreateFormProps } from '../../interface';

const CreateForm = (todo: CreateFormProps) => {

    const [content, setContent] = useState('')
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        todo.addTodo(content);
        setContent('');
    };
    return (
        <form className='create-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="enter to-do list" value={content}
                onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default CreateForm;
