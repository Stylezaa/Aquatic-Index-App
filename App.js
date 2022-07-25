import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native'
import { WebView } from 'react-native-webview';

const IoT = 'https://ceit-iot.netlify.app'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
      <WebView 
        containerStyle = {{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        source={{ uri: IoT}} 
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  }
})