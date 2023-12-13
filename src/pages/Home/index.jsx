import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../redux/features/counter/counterSlice";

const Home = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log("state", value);

  return (
    <div>
      <h1>Home</h1>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
