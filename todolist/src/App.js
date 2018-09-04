import React, { Component } from 'react';

// 定义一个React组件
class App extends Component {
  // 必须有一个函数render
  render() {
    // JSX语法
    return (
      <div>
        {/* 可以直接写JS表达式，不可以直接写js语句 */}
        { 1 + 2 },
        hello, I am wikiHong~
      </div>
    );
  }
}

// 导出组件
export default App;
