import React from 'react';
// routes
import Routing from './routes/Routing';
// context providers
import TasksProvider from './contexts/TasksContext';
import AuthProvider from './contexts/AuthContext';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// custom styles
import './styles/index.scss';

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