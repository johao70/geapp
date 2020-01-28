import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  state = {
    ubication: ''
  };

  geo = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coordinate = JSON.stringify(position);
        alert(coordinate);

        this.setState({ coordinate });
      },
      error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.geo}>
        <Text style={styles.text}>Mostrar Ubicación</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
