//Ducks pattern -액션타입, 액션생성함수, 리듀서 모두 같이 생성
// 액션 타임 3가지 선언
//몇씩 더할 것인가 =SET_DIFF counter 넣은 이유: 중복 방지
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'conuter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 함수 생성
export const setDiff = diff => ({ type: SET_DIFF, diff});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


//리듀서에서 관리할 초기상태 선언(우리가 관리할 값 몇가지 정의)
const initialState = {
    number: 0,
    diff: 1
};



//리듀서 작성- 모듈이름 counter로 생성 -undefined error 해결법 =initialstate
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}

