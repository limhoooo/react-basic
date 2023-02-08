import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import ReduxContext from '../context/ReduxContext';
import { useEffect } from 'react';
import { addTodo, changeTodoDone } from '../../redux/actions';

const Redux = () => {
    const store = useContext(ReduxContext)

    const [todo, setTodo] = useState(store.getState().todos);
    const [todoText, setTodoText] = useState('');
    const addTodoFnc = () => {
        if (!todoText) return;
        store.dispatch(addTodo(todoText));
        setTodoText('asdasd');
    }
    const changeDone = (index) => {
        store.dispatch(changeTodoDone(index));
    }
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setTodo(store.getState().todos);
            console.log(store.getState());
        });
        return () => {
            unsubscribe();
        };
    }, [])
    return (
        <div>
            <h1>Redux</h1>
            <div>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button onClick={addTodoFnc}>AddTodo</button>
            </div>
            <div>
                {todo.map((item, index) =>
                    <div key={index}>
                        <p >{item.todo}</p>
                        <button onClick={() => changeDone(index)}>{item.done ? '완료' : '진행중'}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Redux;