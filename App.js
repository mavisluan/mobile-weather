import React, {Component} from 'react'
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, ActivityIndicator, StatusBar } from 'react-native'
import {getWeatherImage} from './utils/getWeatherImage'

import SearchInput from './SearchInput'
import { fetchLocationId, fetchWeather } from './utils/api';

export default class App extends Component {
  state = {
    location: '',
    weather: '',
    temperature: 0,
    loading: false,
    error: false
  }

  componentDidMount = () => {
    this.handleSearchResult('San Francisco')
  }
  
  handleSearchResult = async (city ) => {
    if (city) {
      this.setState({ loading: true }, async () => {
        try {
          const locationId = await fetchLocationId(city )
          const result = await fetchWeather(locationId)
          const { location, temperature, weather } = result

          this.setState({ 
            location, 
            weather, 
            temperature, 
            loading: false, 
            error: false 
          })
        } catch (error) {
          this.setState({ 
            error: true, 
            loading: false 
          })
        }
      })     
    } 
  }

  render() {
    const { location, weather, temperature, loading, error} = this.state 

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <StatusBar barStyle='light-content'/>
        <ImageBackground 
          source={getWeatherImage(weather)} 
          style={{flex: 1}}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator 
              animating={loading} 
              style={{justifyContent: 'center'}}
              size='large'
              color='darkgray'
            />
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}
                {!error && (
                  <View >
                    <Text style={[styles.largeText, styles.textStyle ]}>{location}</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                    <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°C`}</Text>
                  </View>       
                )}
                <SearchInput
                  onSubmit={this.handleSearchResult}
                />
              </View>
            )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textStyle: {
    color: 'white',
    paddingBottom: 10,
    textAlign: 'center'
  },
  largeText: {
    fontSize: 50,
  },
  smallText: {
    fontSize: 20,
  }
});
