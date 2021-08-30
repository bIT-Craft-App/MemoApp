import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  /* useStateについて
    const[保持したい値, 値を更新する関数] = useState(初期値)
  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        console.log(error.code, error.message);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
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
          <Text style={styles.footerText}>Already Registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log In.</Text>
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
