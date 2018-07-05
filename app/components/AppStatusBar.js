import React from 'react';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';


const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ height: Constants.statusBarHeight ,backgroundColor }}>
    <StatusBar backgroundColor={backgroundColor} {...props} translucent/>
  </View>
);

export default AppStatusBar;
