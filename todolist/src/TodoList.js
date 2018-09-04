import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

// 定义一个React组件
class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick () {
    this.setState({
      list: [ ...this.state.list, this.state.inputValue ],
      inputValue: ''
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // handelItemClick (index) {
  //   const list = [...this.state.list]
  //   list.splice(index, 1)
  //   this.setState({
  //     list
  //   })
  // }

  handelDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  // 必须有一个函数render
  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  render() {
    // JSX语法
    return (
      <div>
        <div>
          <input value={ this.state.inputValue } onChange = { this.handleInputChange.bind(this) } />
          <button onClick = { this.handleBtnClick.bind(this) }>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li onClick={ this.handelItemClick.bind(this, index) } key={index}>{item}</li>
              return <TodoItem handelDelete={this.handelDelete.bind(this)} comtent={item} key={index} index={index}/>
            })
          }
        </ul>
      </div>
    );
  }
}

// 导出组件
export default TodoList;
