import React from 'react'

class TodoItem extends React.Component {
  // 子组件要调用父组件传过来的方法
  handelDelete () {
    this.props.handelDelete(this.props.index)
  }
  render () {
    return (
      <div onClick = { this.handelDelete.bind(this) }> { this.props.comtent } </div>
    )
  }
}

export default TodoItem