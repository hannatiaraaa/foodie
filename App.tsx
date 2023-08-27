import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Root from './Root';
import SplashScreen from 'react-native-splash-screen';
import {isAndroid} from 'configs/devices';

// redux
import {Provider} from 'react-redux';
import {persistor, store} from 'services/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  useEffect(() => {
    if (isAndroid) {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
