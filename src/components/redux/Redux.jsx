import React, { useState } from 'react';
import { useEffect } from 'react';
import { addTodo, doneTodo } from '../../redux/actions';
import store from './../../redux/store';

const Redux = () => {
    const [state, setState] = useState(store.getState())
    const [add, setAdd] = useState('')
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log('aaa');
            setState(store.getState());
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const addFuc = () => {
        if (!add) return
        store.dispatch(addTodo(add))
        setAdd('');
    }
    const doneFnc = index => {
        store.dispatch(doneTodo(index))
    }

    return (
        <div>
            <h2>redux 할일</h2>
            <input type="text" value={add} onChange={e => setAdd(e.target.value)} />
            <button onClick={addFuc}>add추가</button>
            {state.map((obj, index) => <div key={obj.index}>
                {obj.todo}
                {obj.done ? ' 완료' : ' 진행중'}
                <button onClick={() => doneFnc(obj.index)}>done</button>
            </div>)}

        </div>
    );
};

export default Redux;