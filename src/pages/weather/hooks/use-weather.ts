import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/pages/weather/services';

export const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: getWeather,
  });
};
