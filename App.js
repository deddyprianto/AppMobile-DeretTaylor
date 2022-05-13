import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const DeretTaylorApp = () => {
  const valRef = React.useRef(null);
  const [showNumber, setShowNumber] = React.useState(0);
  console.log(showNumber);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Deret Taylor App</Text>
      <TextInput
        style={styles.input}
        ref={valRef}
        placeholder="Put your number here..."
        keyboardType="numeric"
      />
      <Button
        title="Process"
        onPress={() => {
          const factorial = n => (n ? n * factorial(n - 1) : 1);
          // init exponential
          const expoInitial = x => {
            return function (n) {
              return Math.pow(x, n) / factorial(n);
            };
          };
          // create core function
          const sum = series => {
            let change = series(1);
            let result = series(0) + change;
            change = Math.abs(change);
            for (let n = 2; change > 0.000001; n++) {
              let before = result;
              let after = result + series(n);
              change = Math.abs(after - before);
              result = after;
            }
            return result;
          };
          // final fn and result
          const exp = x => sum(expoInitial(x));
          setShowNumber(exp(valRef.current.value));
        }}
      />
      <Text style={{marginTop: '30px', fontSize: '20px'}}>{showNumber}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: '10px',
  },
});

export default DeretTaylorApp;
