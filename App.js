import React from 'react';
import { Provider } from 'react-redux';
import storeConfig from './app/store/storeConfig';
import { MainNavigator } from './app/config/routes';
import { View } from 'react-native';
import AppStatusBar from './app/components/AppStatusBar';
import { APP_STATUSBAR_BACKGROUND } from './app/config/colours';

const App = () => (
  <Provider store={storeConfig}>
    <View style={{ flex: 1 }}>
      <AppStatusBar
        backgroundColor={APP_STATUSBAR_BACKGROUND}
        barStyle="light-content"
      />
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
