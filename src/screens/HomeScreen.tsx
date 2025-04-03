import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from '../components/WeatherCard';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen: React.FC = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    return (
      <View style={styles.container}>
        <Text>Error: WeatherContext not available</Text>
      </View>
    );
  }

  const { weather, loading, error, fetchWeatherData, lastCity } = context;
  const [city, setCity] = useState(lastCity || '');

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    rowGap: 12,
  },
  input: {
    height: 44,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 40
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;