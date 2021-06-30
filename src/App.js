
import React from 'react';
import './App.css';
import Form from './components/Form';
import { useFirestore } from './hooks/useFirestore';
import Messages from './components/Messages';
import Table from './components/Table';

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

