// 関数内で状態を管理できるフック、useStateとuseReducer
// useStateはシンプルな状態管理に使われ、useReducerは複雑な状態管理や複数の要素をまとめて管理する際に向いている
// おそらく違いは、状態の更新を行う関数の呼び出し方の違いで、
// useReducerだと様々な要件を対応しやすいのかもしれない(下記例だと * やリセットもできる。といったように)

// useStateを使用したコード
// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>カウント！</button>
//     </div>
//   );
// }
// export default Counter;

// useReducerを使用したコード
import { useReducer } from "react";
type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return currentCount + 1
    case "DECREMENT":
      return currentCount - 1
    case "DOUBLE":
      return currentCount * 2
    case "RESET":
      return 0
    default:
      return currentCount
  }
}

const Counter = () => {
  const [count, setCount] = useReducer(reducer, 0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount("INCREMENT")}>+</button>
      <button onClick={() => setCount("DECREMENT")}>-</button>
      <button onClick={() => setCount("DOUBLE")}>x2</button>
      <button onClick={() => setCount("RESET")}>Reset</button>
    </div>
  )
}

export default Counter