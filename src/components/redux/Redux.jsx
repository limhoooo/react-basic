import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo, changeTodoDone } from '../../redux/actions';

const Redux = ({ todos, addTodo, changeDone }) => {
    const [todoText, setTodoText] = useState('');
    const addTodoFnc = () => {
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
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        },
        changeDone: (index) => {
            dispatch(changeTodoDone(index))
        }
    }
}
const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Redux)

export default TodoListContainer;