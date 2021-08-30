import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);// Androidでワーニングが出ることの対処

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          // 画面遷移のアニメーションを横方向にする
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={
          // 画面遷移のアニメーションを縦方向に指定
          {
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }
        }
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={
          // 画面遷移のアニメーションを縦方向に指定
          {
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
