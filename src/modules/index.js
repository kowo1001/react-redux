//root 리듀서를 만듬
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


//root 리듀서 생성
const rootReducer = combineReducers({
    counter,
    todos
});

//내보내기
export default rootReducer;

// 리액트에 리덕스를 적용하려면 아래 패키지 설치해야함
//yarn add react-redux
