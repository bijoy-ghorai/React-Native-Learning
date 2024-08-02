import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CastomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button title="Close Modal" onPress={()=>setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="Open Modal"  onPress={()=>setShow(true)}/>
    </View>
  );
};

export default CastomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    width: 250,
    height: 250,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
});
