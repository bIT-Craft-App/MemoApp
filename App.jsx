import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

const Stack = createStackNavigator();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACe6T8FdJZzDcFfL8pBl7Z31VS_aBVT_I',
  authDomain: 'memoapp-59b6e.firebaseapp.com',
  projectId: 'memoapp-59b6e',
  storageBucket: 'memoapp-59b6e.appspot.com',
  messagingSenderId: '115951935335',
  appId: '1:115951935335:web:9d255c58e2690a2088d9c2',
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
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
