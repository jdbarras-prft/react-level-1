import React from 'react'

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

const Loading = props => {

  const [text, setText] = React.useState('Loading');

  React.useEffect(() => {
    const stopper = text + '...';

    const intervalId = setInterval(() => {
      console.log('Interval Fired');
      setText(prevText => (
        prevText === stopper
          ? 'Loading'
          : prevText + '.'
      ));
    }, 300);

    return () => {
      console.log('--- Running cleanup, clearing interval ---');
      clearInterval(intervalId);
    }
  }, []);

  return <p>{text}</p>
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: '',
      loading: true
    };
    console.log('--App constructor--')
  }

  componentDidMount() {
    console.log('--App componentDidMount--')

    window.API.fetchTodos()
      .then(todos => {
        this.setState({
          todos,
          loading: false
        })
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('--App shouldComponentUpdate--')
    return true;
    
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
    if (this.state.loading) {
      return <Loading />
    }
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

export default App;