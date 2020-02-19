//액션 타입 두가지 선언 -할일 항목 추가, 할일 항목을 체크
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//기본값인 id를 global로 선언
let nextId = 1;

//액션 함수 생성 -액션 함수는 export로만 내보냄
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});

//특정 id값을 선택해서 체크
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

//초기상태 선언- 비어있는 배열
const initialState = [
    /*
    {
        id: 1,
        text: '예시',
        done: false
    }
    */
];

//todos 액션 함수 생성 - 리듀서는 export default로 내보냄
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done } : todo
            );
    
        default:
            return state;
    }

}
