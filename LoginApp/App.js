import React from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import bgImage from './Images/background.jpg'
import logoImage from './Images/irvine-company-logo.png'

const authWidth = '85%';
const authHeight = '65%';
const logoWidth = '70%';
// const logoHeight = ''

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.authenticationContainer}>
          <Image source = {logoImage} style={styles.logoImageView}>
          </Image>
          <TextInput style={styles.usernameInput} placeholder="Username"/>
          <TextInput style={styles.passwordInput} placeholder="Password"/>
          <TouchableOpacity
            style={styles.loginScreenButton}
            underlayColor='#fff'>
            <Text style={styles.loginText}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.TextStyle}  >Create new account</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authenticationContainer: {
    width: authWidth,
    height: authHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },  
  logoImageView: {
    width: logoWidth,
    height: 80,
    position: 'absolute',
    top: 30,
    resizeMode: 'contain',
  },
  usernameInput: {
    width: '90%',
    height: '8%',
    position: 'absolute',
    top: 120,
    marginTop: 0,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
    passwordInput: {
    width: '90%',
    height: '8%',
    marginTop: 1,
    position: 'absolute',
    top: 180,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  loginScreenButton:{
    // marginRight:10,
    // marginLeft:10,
    // marginTop:10,
    // paddingTop:10,
    // paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '8%',
    backgroundColor:'#FFD700',
    // borderRadius:10,
    // borderWidth: 1,
    // borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 25,
      fontWeight: 'bold',
  },
  TextStyle: {
    color: '#000000',
    textDecorationLine: 'underline',
    marginTop:10,
    fontSize: 18,
  }
});
