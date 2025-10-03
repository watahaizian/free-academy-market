import { Outlet } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-4">
        <div className="max-w-4xl mx-auto p-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
