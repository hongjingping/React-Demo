// 加载React这个库
import React from 'react';
// 将组件挂在到页面的dom节点上
import ReactDOM from 'react-dom';
// App组件， 大写字母开头
import TodoList from './TodoList.js';
import './style.css'

// JSX语法
ReactDOM.render(<TodoList />, document.getElementById('root'));
