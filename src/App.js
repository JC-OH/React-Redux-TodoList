// App is the root component that renders everything else.

import React from 'react';
import './App.css';
import { Footer } from './components'
import { AddTodo, VisibleTodoList } from './containers'

function App() {
  return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
  );
}

export default App;