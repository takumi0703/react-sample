const Hello = () => {
  // コールバック関数¹
  const onClickFunc = () => {
    alert('Hello, world!')
  }
  const text = "ボタンです"

  return (
    <button onClick={onClickFunc}>
      {/*  本来のHTMLとは異なる記述がある。詳細はReadme参照 */}
      <p style={{padding: "10px", backgroundColor: "red"}}>{text}</p>
    </button>
  )
}

// 外部から呼び出し可能に
export default Hello

// ¹コールバック関数 : 親関数によって特定のタイミングで呼び出される関数(例) onClickFunc)