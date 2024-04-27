// propsを使わずに、親コンポーネントから子コンポーネントに値を渡す方法Context

import React, { useContext} from "react"

// Contextを作成
const TitleContext = React.createContext("");

const Title = () => {
  return (
    // Context名.Consumerで囲うことで、Contextの値を取得することができる
    <TitleContext.Consumer>
      {(title) => <h1>{title}</h1>}
    </TitleContext.Consumer>
  )
}

// もしくは、 useContextを使って、Contextの値を取得することもできる
// 上記コードを同じ
// import React, { useContext} from "react"
// const Title = () => {
  // const title = useContext(TitleContext)
  // return (
    // <>
    //   <p>{title}</p>
    // </>
//   )
// }

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}


const Page = () => {
  const title = "react book"

  return (
    // 子コンポーネントに引数(props)を指定しなくても、
    // Providerを使うことで、Contextに値を渡すことができる(valueは予約語?)
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page