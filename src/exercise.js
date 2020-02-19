import {createStore} from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
};
//액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 함수 생성
const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

//리듀서 생성
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
            ...state,
            counter: state.counter + 1
        };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
    default:
        return state;
    }
}

//스토어 생성
const store = createStore(reducer);
console.log(store.getState());


//스토어 구독함수 사용을 위해 리스터 함수 생성
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
//unsubscribe();

//액션들을 디스페치함
//디스페치할 때마다 현재상태 출력됨 이유: 구독을 했으니까
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: '와우'}));

//스토어 인스턴스를 콘솔창에서 사용 가능
//스토어 안에 무엇이 들어있는지 볼 수 있음
window.store = store; 

//콘솔창에서 나타나지 않음 근데 왜 다 보일까 ?
window.unsubscribe = unsubscribe;






