import React from 'react';
import { StackNavigator } from 'react-navigation';

import List from '../screens/List';
import Detail from '../screens/Detail';

export default StackNavigator(
  {
    Home: {
      screen: List,
    },
    Details: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
    },
  }
);
