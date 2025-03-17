export interface TodoProps {
    content: string;
    id: number;
    isCompleted: boolean;
    isEditing: boolean;
}

export interface TodoItemProps extends TodoProps {
    deleteTodo: (id: number) => void;
    editTodo: (id: number, content: string) => void;
    toggleCompleted: (id: number) => void;
    toggleEditing: (id: number) => void;
}