
import React from 'react';
import './App.css';
import Form from './Form';
import { useFirestore } from '../hooks/useFirestore';
import Messages from './Messages';
import Table from './Table';

function App() {

  const { loading, users, error, username, query, onSubmit, setQuery } = useFirestore();
  
return(
    <div className="App">
    <Form
      onSubmit={onSubmit}
      setQuery={setQuery} />

    <Messages
      loading={loading}
      error={error}
      username={username}
      query={query} />

    <Table
      users={users} />
    </div>
  );
}

export default App;

