import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import Cart from '../screens/cart';
import UpdateQuantity from '../screens/cart/UpdateQuantity';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="updateQuantity"
        component={UpdateQuantity}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
