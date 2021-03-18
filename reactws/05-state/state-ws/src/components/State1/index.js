import React from 'react'

const TodoList = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}  
      </ul>
    );
  }
  
  class State1 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        todos: ['eat', 'sleep', 'code']
      }
    }

    render() {
      return (
        <div>
          <TodoList list={this.state.todos} />  
        </div>
      );
    }
  };

export default State1;