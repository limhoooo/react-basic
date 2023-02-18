import React from 'react';
import { useState } from 'react';
import UserListContainer from './UserListContainer';


const Redux = ({ todos, testText, addTodo, changeDone }) => {
    const [todoText, setTodoText] = useState('');
    const addTodoFnc = () => {
        console.log(testText);
        if (!todoText || checkTodoDuplication()) return;
        addTodo(todoText);
        setTodoText('');
    }
    const checkTodoDuplication = () => {
        return todos.some((item) => item.todo === todoText)
    }
    const changeDoneFnc = (index) => {
        changeDone(index);
    }
    return (
        <div>
            <h1>Redux</h1>
            <div>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button onClick={addTodoFnc}>AddTodo</button>
            </div>
            <div>
                {todos.map((item, index) =>
                    <div key={index}>
                        <p >{item.todo}
                            <button onClick={() => changeDoneFnc(index)}>{item.done ? '완료' : '진행중'}</button>
                        </p>
                    </div>
                )}
            </div>
            <UserListContainer />
        </div>
    );
};

export default Redux;