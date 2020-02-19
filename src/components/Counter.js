//프리젠테이셔널 컴포넌트 생성 - 카운터 (UI 생성에 집중)
import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;

