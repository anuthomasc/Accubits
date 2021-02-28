import { StyleSheet } from 'react-native';
import { responsiveWidth } from "../../globals/dimensions";
import { Colors } from "../../globals/globalStyles";
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.COLOR_WHITE
  },
  logo:{
    width:responsiveWidth(20),
    height:responsiveWidth(20),
    resizeMode:'contain'
  }
});
