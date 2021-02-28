import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../globals/dimensions";
import {  Colors} from "../../globals/globalStyles";
export const styles = StyleSheet.create({
  logo:{
    width:responsiveWidth(20),
    height:responsiveWidth(20),
    resizeMode:'contain'
  },
  textInputStyle: {
    height: responsiveHeight(6),
    borderWidth: 1, borderColor: Colors.COLOR_BLACK,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    color: Colors.COLOR_BLACK,
    fontSize: responsiveFontSize(1.6),
    width:responsiveWidth(90),
    marginTop:responsiveHeight(2),
    fontFamily:"Montserrat-Regular"
  },
  logo:{
    width:responsiveWidth(30),
    height:responsiveWidth(30),
    resizeMode:'contain'
  },
  logoContainer:{
    paddingVertical:responsiveHeight(10)
  }
});
