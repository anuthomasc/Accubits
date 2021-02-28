import { Platform, StatusBar, StyleSheet } from 'react-native';
export const Colors = {
  COLOR_WHITE: '#fff',
  COLOR_BLACK: '#000',
  COLOR_RED: "#EF0D33",
  COLOR_GREY_TRANSPARENT: 'rgba(128,128,128,.4)',
};
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from './dimensions';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const GlobalStyles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  statusBarHeight: {
    marginTop: STATUSBAR_HEIGHT,
  },
  commonButtonContainer: {
    backgroundColor: Colors.COLOR_RED,
    paddingVertical: responsiveWidth(3),
    borderRadius: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: responsiveFontSize(2.3),
    color: Colors.COLOR_WHITE,
    width: responsiveWidth(50),
    textAlign: 'center',
    fontFamily:"Montserrat-Bold"
  },
  mainContainer:{
    flex:1,
    backgroundColor:Colors.COLOR_WHITE
  },
  container: {
    alignItems: 'center',
    height:'100%'
  },
  boldText:{
    fontSize: 24,
    color: Colors.COLOR_RED,
    textAlign: 'center',
    fontFamily:"Montserrat-Bold"
  },
  italicText:{
    fontSize: 20,
    color: Colors.COLOR_BLACK,
    fontFamily:"Montserrat-Italic",
    textAlign: 'center',
    fontWeight:'normal'
  },
  scrollView:{
    alignItems:'center',
    backgroundColor:Colors.COLOR_WHITE
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_GREY_TRANSPARENT,
    zIndex: 9999,
    elevation: 3
  },
});
