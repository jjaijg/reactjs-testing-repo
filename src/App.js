import { useState } from 'react';
import AppAxios from './components/AppAxios';
import AppHookContext from './components/AppHookContext';
import AppHookForm1 from './components/AppHookForm1';
import AppHookProp from './components/AppHookProp';
import AppHookReducer from './components/AppHookReducer';
import Basic from './components/Basic';
import Context from './context/Context';

function App() {
  const [state, setState] = useState('Some Text');
  const [name, setName] = useState('my name');

  const changeName = () => {
    setName('Jai');
  };

  const changeText = () => {
    setState('Some Other Text');
  };

  return (
    <div>
      <Basic />
      <AppHookProp name={name} changeName={changeName} />
      <AppHookReducer />
      <AppHookForm1 />
      <Context.Provider
        value={{
          stateProp: state,
          changeTextProp: changeText,
        }}
      >
        <AppHookContext />
      </Context.Provider>
      {/* <AppAxios url='https://jsonplaceholder.typicode.com/posts/1' /> */}
    </div>
  );
}

export default App;
