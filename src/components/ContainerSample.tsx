import React from "react";

// ReactNode は、<Container><Container/>で囲まれた部分の型指定(JSX)
// Rubyで言うと、ブロックの型みたいなものかな
type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

// JSX.Element は、 JSX構文の型指定
// 別になくてもエラーにはならない。
const Container = (props: ContainerProps): JSX.Element => {
  const {title, children} = props;

  return (
    <div style={{background: "red"}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    <Container title="title">
      <p>この部分が背景色で囲まれます</p>
    </Container>
  )
}

export default Parent;