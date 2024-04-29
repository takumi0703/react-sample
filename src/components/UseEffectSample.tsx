// Stateなどのによって状態の変化を監視し、その変化に応じて処理を行う、useEffectフック
// カウントアップに応じて、document.titleを変更するサンプル
import React, { useState, useEffect } from 'react';

const UseEffectSample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectSample;