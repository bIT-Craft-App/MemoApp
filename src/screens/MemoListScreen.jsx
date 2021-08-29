import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      {/*  メモリスト */}
      <MemoList />
      {/*  追加ボタン */}
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体
    backgroundColor: '#F0F4F8',
    /* ReactNativeでは整列方向は横がデフォルト(htmlと逆)
    alignItems: 'center', // 横方向の並べ方
    justifyContent: 'center', // 縦方向の並べ方
    flexDirection: 'row', // これを入れると方向は逆
    */
  },
});
