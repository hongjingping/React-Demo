import React, { Component } from 'react';

// 定义一个React组件
class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [
      ]
    }
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, 'hello world']
    })
  }

  // 必须有一个函数render
  render() {
    // JSX语法
    return (
      <div>
        <div>
          <input/>
          <button onClick={ this.handleBtnClick.bind(this) }>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// 导出组件
export default TodoList;
