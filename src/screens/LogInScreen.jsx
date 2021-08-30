import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { isLong } from 'long';

export default function LogInScreen(props) {
  const { navigation } = props;
  /* useStateについて
    const[保持したい値, 値を更新する関数] = useState(初期値)
  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  /* useEffectについて
   useEffect(コールバック関数)
   propsが変更されるなど、画面が更新されるたびにコールバック関数が実行される
   useEffect(コールバック関数,[])
   コンポーネントがマウントされた１回だけコールバック関数が実行される
   useEffect(コールバック関数,[foo])
   fooが更新されたらコールバック関数が実行される

   コールバック関数のreturnに関数をセットすると
   アンマウント時に実行される
  */
  useEffect(() => {
    // unsubscribeにログイン状態監視をキャンセルする関数が代入される
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      } else {
        setIsLoading(false);
      }
    });
    // アンマウント時にunsubscribe(ログイン状態監視をキャンセルする関数)が実行される
    return unsubscribe;
  }, []);
  // submitボタン実行時
  function handlePress() {
    setIsLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      })
      .then(() => { // 正常でもエラーでも実行される
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        {/*
          emailにユーザが入力できるようにvalueとonChangeTextを下記のようにする
          value={email}
          onChangeText={(text) => { setEmail(text); }}
        */}
        {/*
          autoCapitalize="none" 先頭が大文字にならない、
          keyboardType="email-address" キーボードタイプがemailを打ちやすいようになる
          placefolder="Email Address" 最初に薄くEmail Addressと表示
          textContentType="emailAddress" これを入れておくと入力候補を出してくれる
        */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        { /* secureEntryにより入力したときに隠される */}
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignUp' }],
            });
          }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    // lineHeight: 32,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
