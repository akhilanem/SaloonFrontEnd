import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.js';
import App from './App.jsx'


// ReactDOM.render(
//   <ChakraProvider>
//     <App />
//   </ChakraProvider>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);