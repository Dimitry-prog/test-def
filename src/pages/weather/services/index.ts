import { axiosWeatherInstance } from '@/shared/lib/api.ts';
import { WeatherResponseServerType } from '@/pages/weather/types';

export const getWeather = async () => {
  const todos = await axiosWeatherInstance<WeatherResponseServerType>('');

  return todos.data;
};
