import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types'; // プロパティの型を管理するライブラリ

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}
// プロパティの型の定義
Hello.propTypes = {
  children: string.isRequired, // 文字列型とする 入力必須
  bang: bool, // ブール型とする 入力必須では無いのでデフォルト値が必要!
  style: shape(), // shape型とする
};
// デフォルト値の定義
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
export default Hello;
