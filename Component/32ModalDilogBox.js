import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ModalDilogBox = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      {/* <Text>32ModalDilogBox</Text> */}
      <Modal
        transparent={true}
        visible={showModal}
        // animationType='fade'
        animationType="slide">
        <View style={styles.createdView}>
          <View style={styles.modalView}>
            <Text style={styles.styleText}>Modal Diloge Box</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

export default ModalDilogBox;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  createdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 40,
    borderRadius: 20,
    backgroundColor: 'skyblue',
    shadowColor: 'black',
    elevation: 5,
  },
  styleText: {
    fontSize: 25,
    marginBottom: 10,
  },
});
