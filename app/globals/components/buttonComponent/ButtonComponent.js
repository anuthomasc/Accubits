import React from 'react';
import { Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from "../../globalStyles";

export default function ButtonComponent(props) {
  return (
    <TouchableOpacity style={GlobalStyles.commonButtonContainer}
      onPress={props.buttonClick}>
      <Text style={GlobalStyles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  )
};
