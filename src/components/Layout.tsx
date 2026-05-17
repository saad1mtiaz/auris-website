import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg selection:bg-accent/30 selection:text-accent">
      <CustomCursor />
      <Navigation />
      <ScrollToTopButton />
      <div className="flex-grow pt-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
