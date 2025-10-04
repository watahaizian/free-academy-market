import { Outlet } from 'react-router-dom';
import Header from './Header/index';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32">
        <div className="max-w-4xl mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
