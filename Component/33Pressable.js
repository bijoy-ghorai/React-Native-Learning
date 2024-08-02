import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const PressableButton = () => {
  return (
    <View style={styles.main}>
      {/* <Text>33Pressable</Text> */}
      <Pressable
        onPress={() => console.warn('Normal Press')}
        onLongPress={() => console.warn('LongPress')}
        onPressIn={() => console.warn('Press In')}
        onPressOut={() => console.warn('Press Out')}>
        <Text style={styles.pressBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  pressBtn: {
    backgroundColor: 'skyblue',
    color: 'yellow',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    shadowColor: 'golden',
    elevation: 5,
  },
});
