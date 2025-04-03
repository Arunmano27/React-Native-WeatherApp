export type WeatherData = {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  };
  
  export type WeatherCardProps = {
    weather: WeatherData;
  };