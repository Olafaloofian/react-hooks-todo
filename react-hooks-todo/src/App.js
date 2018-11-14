// https://scotch-io.cdn.ampproject.org/v/s/scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components/amp?amp_js_v=0.1#referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s&ampshare=https%3A%2F%2Fscotch.io%2Ftutorials%2Fbuild-a-react-to-do-app-with-react-hooks-no-class-components

import React, { useState, useEffect } from 'react';
import './App.css';

// A component that makes a form to enter new list items
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}      
      />
    </form>
  )
}


// Main component where everything comes together
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet freeple for lunch",
      isCompleted: false
    },
    {
      text: "Do this and that and then this again",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  // A little component defined inside of App
  const Todo = ({ todo, index, completeTodo }) => {
    return (
      <div 
        className='todo'
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}

        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
