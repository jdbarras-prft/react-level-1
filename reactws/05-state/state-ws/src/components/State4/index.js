import React from 'react'

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
  
class State4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        todos: ['eat', 'sleep', 'code'],
        input: ''
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
      this.setState(prevState => (
        {
          todos: prevState.todos.concat([prevState.input]),
          input: ''
        }
      ));
    }

    updateInput = value => {
      this.setState({ input: value });
    }

    render() {
      return (
        <div>
          <input
            type={'text'}
            placeholder={'new item'}
            value={this.state.input}
            onChange={event => this.updateInput(event.target.value)}
          />
          <button onClick={this.handleAddTodo}>Submit</button>
          <TodoList 
            list={this.state.todos}
            onRemoveItem={this.handleRemoveTodo}
          />  
        </div>
      );
    }
  };

export default State4;