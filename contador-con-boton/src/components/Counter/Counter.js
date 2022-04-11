import './Counter.css';
import {useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('montado');
    } , []);

    const decrement = () => {
        if (count> 0){
            setCount(count - 1);
        }
        
    }

    const increment = () => {
        console.log('increment')
        setCount(count + 1);
    }

    const disabledDecrement = () => {

    }

    return(
        <div>
            <button onClick={decrement}  disabled={count ? 0 : true} >-</button>
            <p className='numberCount'>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
} 

export default Counter