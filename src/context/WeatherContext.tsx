import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchWeather } from '../services/WeatherAPI';
import { getLastCity, storeLastCity } from '../utils/storage';

type WeatherContextType = {
  weather: any;
  loading: boolean;
  error: string | null;
  lastCity: string;
  fetchWeatherData: (city: string) => Promise<void>;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({children}: WeatherProviderProps) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastCity, setLastCity] = useState<string>('');

  useEffect(() => {
    const loadLastCity = async () => {
      const city = await getLastCity();
      if (city) {
        setLastCity(city);
        fetchWeatherData(city);
      }
    };
    loadLastCity();
  }, []);

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setLastCity(city);
      await storeLastCity(city);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, loading, error, lastCity, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
