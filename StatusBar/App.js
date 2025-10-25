import { useState } from 'react';
import { StyleSheet, View, Button, StatusBar } from 'react-native';

export default function App() {
  const [visivel, setVisivel] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#7c93dfff"
        barStyle="dark-content"
        hidden={!visivel}
        animated={true}
      />

      <Button
        title={visivel ? 'Ocultar StatusBar' : 'Mostrar StatusBar'}
        onPress={() => setVisivel(!visivel)}
        color="#7c93dfff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});