import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WEATHER_ICON_PATH } from "../config/config";
import { WeatherCardProps } from '../models/types';

const WeatherCard = ({weather}: WeatherCardProps) => {
  const iconUrl = `${WEATHER_ICON_PATH}${weather?.weather[0]?.icon}@2x.png`;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather?.name}</Text>
      <Text style={styles.temp}>{Math.round(weather?.main.temp)}°C</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.condition}>{weather?.weather[0]?.main}</Text>
      <Text style={styles.details}>
        Humidity: {weather?.main.humidity}% | Wind: {weather?.wind.speed} m/s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  condition: {
    fontSize: 20,
    marginTop: 10,
  },
  details: {
    marginTop: 10,
    color: '#666',
  },
});

export default WeatherCard;
