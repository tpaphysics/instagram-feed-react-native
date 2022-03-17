import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import React from 'react';
import Feed from './screens/Feed';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 100, height: 30 }}
          />
        ),
      }}
    >
      <Stack.Screen name="Home" component={Feed} />
    </Stack.Navigator>
  );
}
