import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ loading, error, username, query }) => {
  return (
    <div>
      {loading ? (
        <h3 style={{ color: 'blue' }}>Loading...</h3>
      ) : error === 3 ? (
        <p data-testid="error-message-already-saved">
          {username} already saved to the db
        </p>
      ) : error === 2 ? (
        <p data-testid="error-message" style={{ color: 'red' }}>
          Error {query} not found.
        </p>
      ) : error === 1 ? (
        <p data-testid="success-message">{username} added to the db.</p>
      ) : (
        <p>GitHub Users</p>
      )}
    </div>
  );
};

Messages.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  username: PropTypes.string,
};

export default Messages;
