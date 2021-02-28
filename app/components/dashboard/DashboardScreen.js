import React, { useEffect, useState } from 'react';
import { BackHandler, Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CustomActivityIndicator } from "../../globals/components/customActivityIndicator/CustomActivityIndicator";
import { CustomToast } from "../../globals/components/customToast/CustomToast";
import { GlobalStyles } from "../../globals/globalStyles";
import { strings } from "../../globals/localisation";
import { styles } from "./Style";
export default function DashboardScreen({ navigation, route }) {

  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(route.params.userName);
  var currentCount = 0;


  useEffect(() => {
    if (route.params && route.params.userName)
      setUserName(route.params.userName)

    // Back handler added.
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  // Back handler.
  const backAction = () => {
    // Press two times to eit from the app.
    if (currentCount < 1) {
      currentCount += 1;
      CustomToast(strings.pressAgain)
    } else {
      // Exit the app.
      BackHandler.exitApp()
    }
    setTimeout(() => {
      currentCount = 0
    }, 2000);
    return true;
  };

  return (
    <View style={GlobalStyles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <SafeAreaView style={[GlobalStyles.container, GlobalStyles.statusBarHeight]}>
        {loading && (
          <CustomActivityIndicator />
        )}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo_lowres.png')}
            style={styles.logo}
          />
        </View>
        <Text style={GlobalStyles.boldText}>{strings.welcome}
          <Text style={GlobalStyles.italicText}>{" " + userName}</Text>
        </Text>
      </SafeAreaView>
    </View>
  )
}
