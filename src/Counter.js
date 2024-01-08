import React, {useState} from 'react';
import './App.css';
import OddEvenResult from "./OddEvenResult";




// function Counter() 
const Counter = ({initialValue}) => {
    console.log({initialValue});

    const [number, setNumber] = useState(initialValue); //컴포넌트 상태 관리 함수
    // console.log(number);
    const onIncrease = () => {
        // setNumber(number+1)
        // setNumber(prevNumber => prevNumber + 2); //prevNumber을 받아 +1 해서 리턴한다
        setNumber(number => number + 3); //prevNumber을 받아 +1 해서 리턴한다
    };

    const onDecrease = () => {
        // setNumber(number-1);
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <div> 
                <h1>0</h1>
            </div>
            <div className='hGreen'>
                <h1 >{number}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <OddEvenResult count={number} />
            </div>
        </div>
    );
}

Counter.defaultProps = {
    initialValue2:17,
}

export default Counter;

//함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하시면 안됩니다.
//onClick={onIncrease()}
//이렇게 하면 렌더링되는 시점에서 함수가 호출되버리기 때문입니다. 
//이벤트를 설정할때에는 함수타입의 값을 넣어주어야 한다는 것