import React, { useEffect, useState } from 'react';
import {
  BackHandler, Image,
  KeyboardAvoidingView, SafeAreaView,
  ScrollView, StatusBar,
  TextInput, View
} from 'react-native';
import ButtonComponent from "../../globals/components/buttonComponent/ButtonComponent";
import { CustomActivityIndicator } from "../../globals/components/customActivityIndicator/CustomActivityIndicator";
import { CustomToast } from '../../globals/components/customToast/CustomToast';
import { GLOBAL_DATA } from "../../globals/globalData";
import { Colors, GlobalStyles } from "../../globals/globalStyles";
import { strings } from '../../globals/localisation';
import { styles } from "./Style";
export default function LoginScreen({ navigation }) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  var currentCount = 0

  useEffect(() => {

    // Add backhandler.
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  // Login button is pressed
  const onButtonClick = () => {
    setLoading(true)
    // Check username filed is empty or not.
    if (userName == "") {
      setLoading(false)
      CustomToast(strings.userNameMandatory)
    }
    // Check password filed is empty or not.
    else if (password == "") {
      setLoading(false)
      CustomToast(strings.passwordMandatory)
    }
    // Username and password should be 8 to 16 characters long.
    // This should be validated while registration.
    else if (GLOBAL_DATA.textFieldIsValidated(userName) && GLOBAL_DATA.textFieldIsValidated(password)) {
      setLoading(false)
      navigation.navigate('DashboardScreen', { userName })
    }else{
      setLoading(false)
    }
  }

  const backAction = () => {
    // Press two times to eit from the app.
    if (currentCount < 1) {
      currentCount += 1;
      CustomToast(strings.pressAgain)
    } else {
      // Exit the app here.
      BackHandler.exitApp()
    }
    setTimeout(() => {
      currentCount = 0
    }, 2000);
    return true;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={GlobalStyles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <SafeAreaView style={[GlobalStyles.container, GlobalStyles.statusBarHeight]}>
        {loading && (
          <CustomActivityIndicator />
        )}
        <ScrollView
          keyboardShouldPersistTaps="never"
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[GlobalStyles.scrollView]}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../images/logo_lowres.png')}
              style={styles.logo}
            />
          </View>

          <TextInput
            style={[styles.textInputStyle,]}
            onChangeText={userName => {
              setUserName(userName)
            }}
            placeholder={strings.userName}
            placeholderTextColor={Colors.COLOR_BLACK}
            value={userName}
            returnKeyType="done"
          />
          <TextInput
            style={[styles.textInputStyle,]}
            onChangeText={password => {
              setPassword(password)
            }}
            secureTextEntry={true}
            placeholder={strings.password}
            placeholderTextColor={Colors.COLOR_BLACK}
            value={password}
            returnKeyType="done"
          />
          <ButtonComponent
            buttonClick={onButtonClick}
            buttonText={strings.login}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
