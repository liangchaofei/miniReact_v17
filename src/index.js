/*
 * @Author: cc
 * @LastEditTime: 2021-06-26 18:28:55
 */
import React from "./core/react"; //核心库
import ReactDOM from "./core/react-dom"; //Dom渲染库
// babel会把jsx语法解析为dom进行渲染，jsx实际上更像js语法

// 什么叫React元素
// 是React应用的最小单位，它描述了屏幕看到的内容
// React元素本质是一个普通的js对象
// ReactDom会保证浏览器的Dom和React元素一致

// 创建元素
// let element = React.createElement("div",{
//   className:"title",
//   style:{
//     color:"red"
//   }
// },"hello",React.createElement("span",null,"world"),React.createElement("h3",{
//   style:{
//     color:"orange"
//   }
// },"111"))
// // 函数组件
// function Welcome(props){
//   return React.createElement("div",{
//     className:"title",
//     style:{
//       color:"red"
//     }
//   },"hello",React.createElement("span",null,"world"))
// }
// // createElement可能是一个函数， 不一定是字符串，原生Dom是字符串，类组件和函数组件是function
// let element1 = React.createElement(Welcome,{})

// 类组件
// class Welcome1 extends React.Component{
//  render(){
//   return React.createElement("div",{
//     className:"title",
//     style:{
//       color:"red"
//     }
//   },"hello",React.createElement("span",null,"world"))
//  }
// }
// let element2 = React.createElement(Welcome1,{})
class InputComponent extends React.Component {
  render() {
    return <div>123</div>;
  }
}
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
    this.a = React.createRef();
    this.b = React.createRef();
  }
  add = () => {
    console.log("this.a", this.a);
    console.log("this.b", this.b);
  };
  render() {
    return (
      <div>
        <InputComponent refs={this.a} />
        <input refs={this.b} />
        <button onClick={this.add}>点击我</button>
      </div>
    );
  }
}
// 核心渲染方法
ReactDOM.render(<Counter />, document.getElementById("root"));
