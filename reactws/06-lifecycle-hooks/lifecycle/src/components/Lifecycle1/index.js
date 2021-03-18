import React from 'react';

const TodoList = props => {
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {props.list.map((item, index) => (
            <li key={`${item.task}-${index}`}>
              <span>{item.task} </span>
              <button onClick={() => props.onRemoveItem(item.task)}>
                Remove
              </button>
              <button onClick={() => props.onToggleCompleted(item.task)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const CompletedList = props => {
    return (
      <div>
        <h2>Completed List</h2>
        <ul>
          {props.list.map((item, index) => (
            <li key={`${item.task}-${index}`}>
              <span>{item.task} </span>
              <button onClick={() => props.onToggleCompleted(item.task)}>
                Mark Incomplete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  class Lifecycle1 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        todos: [
          {
            task: 'eat',
            completed: true
          },
          {
            task: 'sleep',
            completed: false
          },
          {
            task: 'code',
            completed: false
          }
        ],
        input: ''
      };
      console.log('--App constructor--')
    }

    componentDidMount() {
      console.log('--App componentDidMount--')
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('--App shouldComponentUpdate--')
      // return true;
      if (this.state.input !== nextState.input) return true;
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('--App componentDidUpdate--')
    }

    componentWillUnmount() {
      console.log('--App componentWillUnmount--')
    }

    handleRemoveTodo = item => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(todo => todo.task !== item)
        };
      });
    };

    handleAddTodo = () => {
      this.setState(prevState => ({
        todos: prevState.todos.concat([
          {
            task: prevState.input,
            completed: false
          }
        ]),
        input: ''
      }));
    };

    updateInput = value => {
      this.setState({ input: value });
    };

    handleToggleCompleted = task => {
      this.setState(prevState => {
        const todo = prevState.todos.find(todo => todo.task === task);
        return {
          todos: prevState.todos.map(todo =>
            todo.task === task
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      });
    };

    render() {
      console.log('--App render--')
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
            list={this.state.todos.filter(item => item.completed === false)}
            onRemoveItem={this.handleRemoveTodo}
            onToggleCompleted={this.handleToggleCompleted}
          />
          <CompletedList
            list={this.state.todos.filter(item => item.completed === true)}
            onToggleCompleted={this.handleToggleCompleted}
          />
        </div>
      );
    }
  }

  export default Lifecycle1;