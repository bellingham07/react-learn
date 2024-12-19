import { useState } from 'react';
import AddTodo from './addtodo';
import TaskList from './tasklist';
import './styles.css';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {
        // const newTodos = todos.slice().push()
        // todos.push({
        //     id: nextId++,
        //     title: title,
        //     done: false
        // });

        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeTodo(nextTodo) {
        // const todo = todos.find(t =>
        //     t.id === nextTodo.id
        // );
        // todo.title = nextTodo.title;
        // todo.done = nextTodo.done;

        // const newTodos = todos.map(t => {
        //     if (t.id === nextTodo.id) {
        //         return {
        //             ...t,
        //             title: nextTodo.title,
        //             done: nextTodo.done
        //         };
        //     } else {
        //         return t;
        //     }
        // })

        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        })
        );
    }

    function handleDeleteTodo(todoId) {
        // const index = todos.findIndex(t =>
        //     t.id === todoId
        // );
        // todos.splice(index, 1);
        // const newTodos = todos.filter(t => t.id !== todoId)

        setTodos(todos.filter(t => t.id !== todoId));
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
