import React from 'react';
import { Footer } from './footer/Footer';
import Header from './header/Header';

interface ILayout {
  children: React.ReactNode;
  pageTitle?: string;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="app-container ">{children}</main>
      <Footer />
    </div>
  );
};
