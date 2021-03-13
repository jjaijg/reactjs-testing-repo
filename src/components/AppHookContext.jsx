import { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

const AppHookContext = (props) => {
  const context = useContext(Context);

  return (
    <div>
      <button onClick={context.changeTextProp}>Change Text</button>
      <p>{context.stateProp}</p>
    </div>
  );
};

AppHookContext.propTypes = {};

export default AppHookContext;
