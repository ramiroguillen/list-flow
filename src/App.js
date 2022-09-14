// libraries
import React from 'react';
// routes
import Routing from './routes/Routing';
// context providers
import TasksProvider from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Routing />
    </TasksProvider>
  );
}

export default App;