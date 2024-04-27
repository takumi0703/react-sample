
// 書籍p.85
// 関数には、クラスと関数があり、 const で定義された関数は関数コンポーネントと呼ばれる
const Text = (props :{content: string}) => {
  const { content } = props
  return <p className="text">{content}</p>
}

// クラスで書くと下記のような形で、thisを使用しなければいけなかったり
// なんかわかりづらいので、関数コンポーネントで書くことが多い
// import React from 'react';
// class Text extends React.Component<{content: string}> {
//   render() {
//     const { content } = this.props
//     return <p className="text">{content}</p>
//   }
// }

const Message = (props: {}) => {
  const content1 = "content1"
  const content2 = "content2"

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message