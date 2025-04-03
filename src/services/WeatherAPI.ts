import { BASE_URL, GEOLOCATION_PATH, WEATHER_PATH } from "../config/config";
import { API_KEY } from '@env';
import { WeatherData } from '../models/types';

type GeoLocation = {
  lat: number;
  lon: number;
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const geoResponse = await fetch(
      `${BASE_URL}${GEOLOCATION_PATH}?q=${city}&limit=1&appid=${API_KEY}`
    );
    if (!geoResponse.ok) {
      throw new Error('City not found');
    }
    const geoData: GeoLocation[] = await geoResponse.json();
    if (geoData.length === 0) {
      throw new Error('City not found');
    }

    const { lat, lon } = geoData[0];
    const weatherResponse = await fetch(
      `${BASE_URL}${WEATHER_PATH}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    if (!weatherResponse.ok) {
      throw new Error('Weather data not available');
    }
    const weatherData: WeatherData = await weatherResponse.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
