import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Root from './Root';
import SplashScreen from 'react-native-splash-screen';
import {isAndroid} from 'configs/devices';

function App() {
  useEffect(() => {
    if (isAndroid) {
      SplashScreen.hide();
    }
  }, []);
  return <Root />;
}

export default App;
