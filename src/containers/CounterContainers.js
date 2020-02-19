//컨테이너 컴포넌트 -리덕스 상태를 조회하거나 액션을 디스페치할 수 있는 컴포넌트를 의미함

import React from 'react';
import Counter from '../components/Counter';
//상태 조회 함수 - useSelector
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease, setDiff} from '../modules/counter';

function CounterContainer() {
    //useSelector 결과물이 두가지 값을 선택한 객체에서 number,diff에 비구조 할당으로 추출해서 긱 깂을 조회할 수 있게함 
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));



    return <Counter 
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
    />
}

export default CounterContainer;
