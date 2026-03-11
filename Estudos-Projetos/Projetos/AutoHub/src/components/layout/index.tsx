import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';

export function Layout() {
  return (
    <div>
      <Header />
      <main className="h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}