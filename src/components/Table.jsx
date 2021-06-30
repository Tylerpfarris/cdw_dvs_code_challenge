import React from 'react';
import PropTypes from 'prop-types';
import { mungeDateTime } from '../utils/mungeDateTime';

function Table({ users }) {
  return (
    <table aria-label="user-table" style={{ width: '90vw', margin: 'auto' }}>
      <thead>
        <tr style={{ backgroundColor: '#FFE598', height: '2rem' }}>
          <th>Username</th>
          <th>Name</th>
          <th>Public Repos</th>
          <th>Public Gists</th>
          <th>Followers</th>
          <th>Following</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody aria-label="table-body" style={{ backgroundColor: '#CCCCCC' }}>
        {users.map(
          ({
            id,
            login,
            html_url,
            _name,
            public_repos,
            public_gists,
            followers,
            following,
            created_at,
          }) => (
            <tr key={`${id}+${login}`}>
              <td>
                <a href={html_url}>{login}</a>
              </td>
              <td>{_name}</td>
              <td>{public_repos}</td>
              <td>{public_gists}</td>
              <td>{followers}</td>
              <td>{following}</td>
              <td>{mungeDateTime(created_at)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      public_gists: PropTypes.number.isRequired,
      public_repos: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      _name: PropTypes.string.isRequired,
    })
  ),
};

export default Table;
