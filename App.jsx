import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*  ヘッダー */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/*  メモリスト */}
      <View>
        {/*  メモリストアイテム */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/*  メモリストアイテム */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/*  メモリストアイテム */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021/1/1 10:00:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/*  追加ボタン */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
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
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
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
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // iOSのみ
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // ここまで
    // Androidのみ
    elevation: 8, // オブジェクトの高さを指定するパラメータ
    // ここまで
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
