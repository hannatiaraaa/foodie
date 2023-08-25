import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Root from './Root';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Root />;
}

export default App;
