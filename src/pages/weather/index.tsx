import { useWeather } from '@/pages/weather/hooks/use-weather.ts';
import Loader from '@/shared/components/loader.tsx';

const WeatherPage = () => {
  const { data, isError, isLoading, error } = useWeather();

  return (
    <section className="space-y-5">
      <h2 className="text-center text-2xl font-bold">Weather</h2>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2 className="text-lg text-destructive">{error.message}</h2>
      ) : data ? (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-3xl font-semibold">
                {data.name}, {data.sys.country}
              </p>
              <span className="text-lg">{data.weather[0].description}</span>
            </div>
            <img
              src={`${import.meta.env.VITE_API_BASE_WEATHER_IMG_URL}/${data.weather[0].icon}.png`}
              alt="weather"
              className="w-20 object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <p className="text-8xl font-semibold">{data.main.temp.toFixed()}&deg;C </p>
            <div className="flex flex-col gap-2">
              <p className="text-lg">Feels like: {data.main.feels_like.toFixed()}&deg;C</p>
              <p className="text-lg">Wind: {data.wind.speed}m/s</p>
              <p className="text-lg">Humidity: {data.main.humidity}%</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default WeatherPage;
