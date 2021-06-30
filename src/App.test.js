import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import "firebase/firestore";
import userEvent from '@testing-library/user-event';
import App from './App';


jest.mock('./hooks/useFirestore', () => ({
  useFirestore: () => ({
    loading: false, users: userData, error: 1, username: '', query: '', onSubmit: jest.fn(), setQuery: jest.fn() , setUsers: jest.fn() })
}))

const userData = [
    {
      _name: 'Tyler Farris',
      created_at: '2020-12-13T03:38:46Z',
      followers: 12,
      following: 8,
      html_url: 'https://github.com/Tylerpfarris',
      id: 75921231,
      login: 'Tylerpfarris',
      public_gists: 0,
      public_repos: 61,
      status: 200
    },
    {
      _name: 'Test1',
      created_at: '2020-12-13T03:38:46Z',
      followers: 12,
      following: 8,
      html_url: 'https://github.com/Tylerpfarris',
      id: 75921231,
      login: 'TestLogin',
      public_gists: 0,
      public_repos: 61,
      status: 200
    }
  ]
describe('App', () => {


  it('makes an API call to GitHub and then upon hitting enter it saves it to the DB and displays success message', async () => {
    render(<App />);

    const searchBarEl = await screen.findByTestId('search-bar');
    expect(searchBarEl).toBeInTheDocument();

    userEvent.type(searchBarEl, 'Tylerpfarris')
    fireEvent.submit(searchBarEl);
    
    const successMessageEl = await screen.findByTestId('success-message');
    expect(successMessageEl).toBeInTheDocument();

    const tableEl = screen.getByLabelText('user-table');
    expect(tableEl).toBeInTheDocument();

    const tableBodyEl = await screen.findByLabelText('table-body');
    expect(tableBodyEl).toBeInTheDocument();
    expect(tableBodyEl).toHaveTextContent('Tyler Farris')
  
  });
})

describe('utils tests', () => {
  it('washes a username query of spaces and punctuations', () => {
    
  })
})