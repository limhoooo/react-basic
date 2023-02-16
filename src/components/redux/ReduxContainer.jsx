import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, changeTodoDone } from '../../redux/actions';
import Redux from './Redux';

// 1. HOC 방식

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         addTodo: (text) => {
//             dispatch(addTodo(text))
//         },
//         changeDone: (index) => {
//             dispatch(changeTodoDone(index))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Redux);

// 2 .hook 방식

function TodoListContainer() {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()

    const addTodoDispatch = useCallback((text) => {
        dispatch(addTodo(text))
    }, [dispatch])

    const changeDoneDispatch = useCallback((index) => {
        dispatch(changeTodoDone(index))
    }, [dispatch])

    return <Redux todos={todos} addTodo={addTodoDispatch} changeDone={changeDoneDispatch} />
}

export default TodoListContainer;
