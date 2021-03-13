import { useState } from 'react';
import PropTypes from 'prop-types';

const AppHookForm1 = (props) => {
  const [valueChange, setValueChange] = useState('');
  const [valueSubmit, setValueSubmit] = useState('');

  const handleChange = (event) => setValueChange(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.text1.value);
  };

  return (
    <div>
      <h1>React hooks form</h1>
      <form data-testid='form' onSubmit={handleSubmit}>
        <label htmlFor='text1'>Input Text:</label>
        <input type='text' id='text1' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      <h3>React State:</h3>
      <p>Change: {valueChange}</p>
      <p>Submit Value: {valueSubmit}</p>
      <br />
    </div>
  );
};

AppHookForm1.propTypes = {};

export default AppHookForm1;
