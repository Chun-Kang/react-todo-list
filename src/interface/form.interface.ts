export interface CreateFormProps {
    addTodo: (content: string) => void;
}

export interface EditFormProps {
    id: number;
    content: string;
    editTodo: (id: number, content: string) => void;
}