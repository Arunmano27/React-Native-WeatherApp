import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_CITY_KEY = '@last_city';

export const storeLastCity = async (city: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LAST_CITY_KEY, city);
  } catch (error) {
    console.error('Error storing last city:', error);
  }
};

export const getLastCity = async (): Promise<string | null> => {
  try {
    const lastCity = await AsyncStorage.getItem(LAST_CITY_KEY);
    return lastCity || null;
  } catch (error) {
    console.error('Error getting last city:', error);
    return null;
  }
};

export const clearLastCity = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(LAST_CITY_KEY);
  } catch (error) {
    console.error('Error clearing last city:', error);
  }
};
