import { useState } from 'react';
import { StyleSheet, View, Button, StatusBar } from 'react-native';

export default function App() {
  const [temaStatus, setTemaStatus] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={ temaStatus ? '#0027a5ff' : '#bf009fff'}
        barStyle={'light-content'}
      />

      <Button
        title={temaStatus ? 'Mudar para Status Bar Rosa': 'Mudar para Status Bar Azul'}
        onPress={() => setTemaStatus(!temaStatus)}
        color={ temaStatus? '#bf009fff' : '#0027a5ff'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecececff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
