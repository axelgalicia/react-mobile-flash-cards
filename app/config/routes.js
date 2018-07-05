import React from 'react';
import { Platform } from 'react-native';
import Notification from '../components/Notification';

import QuizMenu from '../components/QuizMenu';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../generics/Home';
import Notifications from '../generics/Notifications';

import StartQuiz from '../generics/StartQuiz';
import NewDeck from '../generics/NewDeck';
import NewCard from '../generics/NewCard';
import { TabNavigator, StackNavigator } from 'react-navigation';

import {
  TAB_BAR_BACKGROUND_ANDROID,
  TAB_BAR_BACKGROUND_IOS,
  NAV_HEADER_BACKGROUND,
  TAB_BAR_ACTIVE_TINT_IOS,
  NAV_HEADER_TINT,
  TAB_BAR_ACTIVE_TINT_ANDROID,

} from './colours';

export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={31} name="home"  color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={31} name="plus-square"  color={tintColor} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="cog" size={31} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor:
        Platform.OS === 'ios'
          ? TAB_BAR_ACTIVE_TINT_IOS
          : TAB_BAR_ACTIVE_TINT_ANDROID,
      style: {
        height: 56,
        backgroundColor:
          Platform.OS === 'ios'
            ? TAB_BAR_BACKGROUND_IOS
            : TAB_BAR_BACKGROUND_ANDROID,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  QuizMenu: {
    screen: QuizMenu,
    navigationOptions: {
      title: 'Deck',
    },
  },
  Quiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER_BACKGROUND,
      },
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER_BACKGROUND,
      },
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});
