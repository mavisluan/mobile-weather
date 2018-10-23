import React from 'react'
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native'
import {getWeatherImage} from './utils/getWeatherImage'

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground source={getWeatherImage('Clear')} style={{flex: 1}}>
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle ]}>City</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Weather</Text>
            <Text style={[styles.largeText, styles.textStyle]}>22°C</Text>
            <TextInput 
              autoCorrect={false}
              clearButtonMode='always'
              style={styles.inputStyle}
              placeholder='Search city'
              placeholderTextColor='white'
            />
          </View> 
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  textStyle: {
    color: 'white',
    paddingBottom: 10
  },
  largeText: {
    fontSize: 50,
  },
  smallText: {
    fontSize: 20,
  },
  inputStyle: {
    height: 50, 
    width: 340,
    borderRadius: 8,
    backgroundColor: 'darkgray',
    color: 'white',
    paddingLeft: 20,
    marginTop: 40,
    fontSize: 20
  }
});
