import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css'
import { counterActions } from '../Store/counter';

const Counter = () => {
 const dispatch= useDispatch()
 const counter = useSelector(state => state.counter.counter);
 const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler=()=>{
    dispatch(counterActions.decrease(2))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.increase(2))
    
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;