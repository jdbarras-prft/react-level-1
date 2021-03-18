import React from 'react';

const TodoList = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <li key={`${item}-${index}`}>
            <span>{item}  </span>
            <button onClick={() => props.onRemoveItem(item)}>Remove</button>
          </li>

        ))}  
      </ul>
    );
  }
  
class State3 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    todos: ['eat', 'sleep', 'code']
    }
}

handleRemoveTodo = item => {
    this.setState(prevState => {
    return {
        todos: prevState.todos.filter(todo => todo !== item)
    }
    });
}

handleAddTodo = () => {
    // implemented in State4
}

render() {  
    return (
            <div>
                <TodoList 
                list={this.state.todos}
                onRemoveItem={this.handleRemoveTodo}
                />  
            </div>
        );
    }
};

export default State3;