// 関数をメモ化(状態を保持)するuseCallback
// どうメモ化されてるのかは、いまいちわからんかった

import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されたよ')
  return <button onClick={onClick}>-</button>
}

const IncrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されたよ')
  return <button onClick={onClick}>+</button>
}

const CallbackSample = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
    </div>
  )
}
export default CallbackSample