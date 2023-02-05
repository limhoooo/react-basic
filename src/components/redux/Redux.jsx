import React from 'react';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { addTodo, doneTodo } from '../../redux/actions';
import ReduxContext from './../context/ReduxContext';

const Redux = () => {

    const store = useContext(ReduxContext);

    const [todo, setTodo] = useState(store.getState())
    const [todoText, setTodoText] = useState('')
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setTodo(store.getState())
            console.log(store.getState());
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const addFnc = () => {
        if (!todoText) return
        store.dispatch(addTodo(todoText));
        setTodoText('')
    }
    const changeDone = (index) => {
        store.dispatch(doneTodo(index));
    }
    return (
        <div>
            <h1>Redux</h1>
            <div>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button onClick={addFnc}>Add</button>
            </div>
            <div>
                {
                    todo.todos.map((item, index) =>
                        <div key={index}><span>{item.todo}</span><button onClick={() => changeDone(index)}>{item.done ? '완료' : '진행중'}</button></div>
                    )
                }
            </div>
        </div>
    );
};

export default Redux;