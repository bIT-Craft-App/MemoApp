import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      { /* タイトルと日付時間 */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021/1/1 10:00:00</Text>
      </View>
      { /* メモ本体 */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          色々買わないと
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体
    backgroundColor: '#ffffff',
    /* ReactNativeでは整列方向は横がデフォルト(htmlと逆)
    alignItems: 'center', // 横方向の並べ方
    justifyContent: 'center', // 縦方向の並べ方
    flexDirection: 'row', // これを入れると方向は逆
    */
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
