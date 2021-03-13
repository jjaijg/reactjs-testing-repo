import { useState } from 'react';
import PropTypes from 'prop-types';

const AppHookProp = (props) => {
  const [state, setState] = useState('initial state');

  const changeState = () => {
    setState('State changed!!!');
  };

  const changeToJai = () => {
    props.changeName();
  };

  return (
    <div>
      <button onClick={changeState}>State Change Button</button>
      <p>{state}</p>
      <button onClick={changeToJai}>Change Name</button>
      <p>{props.name}</p>
    </div>
  );
};

AppHookProp.propTypes = {};

export default AppHookProp;
