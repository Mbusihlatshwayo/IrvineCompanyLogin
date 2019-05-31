import React from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native';
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
    top: 125,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
    passwordInput: {
    width: '90%',
    height: '8%',
    position: 'absolute',
    top: 180,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
