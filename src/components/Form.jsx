import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, setQuery }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        data-testid="search-bar"
        onChange={({ target }) => setQuery(target.value)}
      />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
