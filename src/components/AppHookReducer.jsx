import { useReducer } from 'react';
import * as actions from '../actions';
import * as reducer from '../reducers/Reducer1';
import PropTypes from 'prop-types';

const AppHookReducer = (props) => {
  const [state, dispatch] = useReducer(reducer.Reducer1, reducer.initialState);

  const dispatchActionSuccess = () => {
    dispatch(actions.SUCCESS);
  };

  const dispatchActionFailure = () => {
    dispatch(actions.FAILURE);
  };

  return (
    <div>
      <div>
        {state.stateProp1 ? (
          <p>stateprop1 is true</p>
        ) : (
          <p>stateprop1 is false</p>
        )}
      </div>
      <button onClick={dispatchActionSuccess}>Dispatch Success</button>
    </div>
  );
};

AppHookReducer.propTypes = {};

export default AppHookReducer;
