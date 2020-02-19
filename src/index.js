import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './exercise'; //리덕스 연습
//Provider를 통해 리덕스를 리액트에 적용 가능
import { Provider } from 'react-redux';
import { createStore} from 'redux';
//createStore 안에 rootReducer 파라미터로 넣어야함 - 경로 index.js까지 갈 필요 없음
import rootReducer from './modules/index';

const store = createStore(rootReducer);
console.log(store.getState());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
