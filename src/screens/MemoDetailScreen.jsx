import React, { useEffect, useState } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      { /* タイトルと日付時間 */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{dateToString(memo && memo.updatedAt)}</Text>
      </View>
      { /* メモ本体 */}
      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.memoText}>
            {memo && memo.bodyText}
          </Text>
        </View>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
  memoBodyInner: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    paddingBottom: 80,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
