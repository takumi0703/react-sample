// 値をメモ化するMemoフック
// Buzz は memoを使用しているので、値が変わらない限り再描画されない
import React, {memo, useState} from "react";

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const {isFizz} = props
  console.log(`Fizzが再描画されたよ。isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}
const Buzz = memo<BuzzProps>((props) => {
  const {isBuzz} = props
  console.log(`Buzzが再描画されたよ。isFizz=${isBuzz}`)
  return (
    <span>
      {isBuzz ? 'Buzz' : ''}
    </span>
  )
})

const MemoParent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log('親コンポーネントが再描画されたよ')
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} />
    </div>
  )
}

export default MemoParent