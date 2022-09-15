// libraries
import React from 'react';
// routes
import Routing from './routes/Routing';
// context providers
import TasksProvider from './contexts/TasksContext';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Routing />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;