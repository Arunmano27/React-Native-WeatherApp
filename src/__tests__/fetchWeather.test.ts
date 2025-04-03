import { fetchWeather } from '../services/WeatherAPI';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetchWeather should return weather data for a city', async () => {
  fetchMock.mockResponses(
    JSON.stringify([{ lat: 12.97, lon: 77.59 }]), // Geolocation API response
    JSON.stringify({ main: { temp: 25, humidity: 60 }, weather: [{ main: 'Clear', icon: '01d' }], wind: { speed: 5 } }) // Weather API response
  );

  const data = await fetchWeather('Bangalore');
  expect(data.main.temp).toBe(25);
  expect(data.weather[0].main).toBe('Clear');
});
