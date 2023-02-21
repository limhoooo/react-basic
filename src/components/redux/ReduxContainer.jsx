import { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addTodo, changeDone } from '../../redux/modules/todos';
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
    const { todos, testText } = useSelector((state) => ({
        todos: state.todos,
        testText: state.testText
    }),
        shallowEqual
    );
    const dispatch = useDispatch()

    const addTodoDispatch = useCallback((text) => {
        dispatch(addTodo(text))
    }, [dispatch])

    const changeDoneDispatch = useCallback((index) => {
        dispatch(changeDone(index))
    }, [dispatch])

    return <Redux todos={todos} testText={testText} addTodo={addTodoDispatch} changeDone={changeDoneDispatch} />
}

export default TodoListContainer;
