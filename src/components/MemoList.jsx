import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';

import Icon from './Icon';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      {/*  メモリストアイテム */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      {/*  メモリストアイテム */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      {/*  メモリストアイテム */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  },
});
