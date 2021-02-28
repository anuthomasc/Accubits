import React, { useEffect } from 'react';
import {
  Image, SafeAreaView,
  StatusBar, View
} from 'react-native';
import { styles } from "./Style";

export default function AuthLoadingScreen({ navigation }) {
  // Checking the mobile number already exsisting or not.
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen')
    }, 1000);
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="transparent"
        translucent barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../images/logo_lowres.png')}
          style={styles.logo}
        />
      </SafeAreaView>
    </View>
  );
}
