import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, setQuery }) {
  return (
    <form onSubmit={onSubmit} style={{ marginTop: '5%' }}>
      <input
        type="text"
        data-testid="search-bar"
        onChange={({ target }) => setQuery(target.value)}
        style={{
          width: '90vw',
          margin: 'auto',
          height: '2rem',
          textAlign: 'center',
          fontSize: '1.8rem',
          backgroundColor: '#B9E0A5',
        }}
      />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
