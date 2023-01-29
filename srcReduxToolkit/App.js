// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
// import store from './redux/store';
import rtkStore from './reduxToolkit/store';
import HomeScreen from './screens/home';

let persistor = persistStore(rtkStore);

const App = () => {
  return (
    <Provider store={rtkStore}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};
export default App;
