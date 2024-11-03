import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="layout">
        <Header />
        <main className="layout-content">
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  
export default Layout;
