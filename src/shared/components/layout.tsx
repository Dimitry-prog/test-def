import { Outlet } from 'react-router-dom';
import Header from '@/shared/components/header.tsx';

const Layout = () => {
  return (
    <div className="container flex flex-col gap-4">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
