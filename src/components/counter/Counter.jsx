import './CounterButton.css'
import { useState } from 'react';
import { CounterButton } from './CounterButton';
import ResetButton from './ResetButton';

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParent(by) {
        setCount(count + by)
    }

    function decrementCounterParent(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalcount"> {count} </span>
            <CounterButton by={1} incrementCounterParent={incrementCounterParent} decrementCounterParent={decrementCounterParent}/>
            <CounterButton by={2} incrementCounterParent={incrementCounterParent} decrementCounterParent={decrementCounterParent}/>
            <CounterButton by={5} incrementCounterParent={incrementCounterParent} decrementCounterParent={decrementCounterParent}/>
            <ResetButton resetCounter={resetCounter}/>
        </>
    )
}

