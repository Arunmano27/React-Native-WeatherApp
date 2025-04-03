import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import HomeScreen from './src/screens/HomeScreen';
import { WeatherProvider } from './src/context/WeatherContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <WeatherProvider>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <HomeScreen />
      </View>
    </WeatherProvider>
  );
}


export default App;
