import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import 'react-native-gesture-handler';

// pages
import SCREEN_CONF from './src/config/screen.conf';

// navigation
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCREEN_CONF.map(({name, component, options}) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
