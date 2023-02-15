import React from 'react';
import { useState } from 'react';
import useReduxDispatch from '../../hook/useReduxDispatch';
import useReduxState from '../../hook/useReduxState';

import { addTodo, changeTodoDone } from '../../redux/actions';

const Redux = () => {
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const [todoText, setTodoText] = useState('');
    const addTodoFnc = () => {
        if (!todoText) return;
        dispatch(addTodo(todoText));
        setTodoText('');
    }
    const changeDone = (index) => {
        dispatch(changeTodoDone(index));
    }

    return (
        <div>
            <h1>Redux</h1>
            <div>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button onClick={addTodoFnc}>AddTodo</button>
            </div>
            <div>
                {state.todos.map((item, index) =>
                    <div key={index}>
                        <p >{item.todo}
                            <button onClick={() => changeDone(index)}>{item.done ? '완료' : '진행중'}</button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Redux;