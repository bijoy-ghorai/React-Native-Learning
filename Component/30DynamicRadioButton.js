import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const DynamicRadioButton = () => {
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'SQL',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name:'Python',
    },
  ];
  const [slectedRadio, setslectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setslectedRadio(item.id)}>
          <View style={styles.radioWraper}>
            <View style={styles.radio}>
              {slectedRadio === item.id ? <View style={styles.radioBg}></View> : null}
            </View>
            <Text style={styles.textRadio}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DynamicRadioButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRadio: {
    fontSize: 20,
    color: 'skyblue',
    
  },
  radio: {
    margin: 10,
    width: 40,
    height: 40,
    borderColor: 'yellow',
    borderRadius: 20,
    borderWidth: 2,
  },
  radioBg: {
    backgroundColor: 'blue',
    height: 28,
    width: 28,
    borderRadius: 25,
    margin: 4,
  },
  radioWraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
