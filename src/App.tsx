import { Route, Routes } from 'react-router-dom';
import SocketPage from '@/pages/socket';
import WeatherPage from '@/pages/weather';
import InfinityPage from '@/pages/infinity';
import Layout from '@/shared/components/layout.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SocketPage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="infinity" element={<InfinityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
