import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      {/*  メモリストアイテム */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
      {/*  メモリストアイテム */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
      {/*  メモリストアイテム */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    // 横並びにする JustifyContentが横方向、alignItemsが縦方向になる
    flexDirection: 'row',
    justifyContent: 'space-between', // 横方向、端ー端に寄せる
    paddingVertical: 16, // 端からのスキマを定義
    paddingHorizontal: 19,
    alignItems: 'center', // 縦方向を中央にする
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
