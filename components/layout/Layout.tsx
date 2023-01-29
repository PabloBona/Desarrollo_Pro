import Head from 'next/head';
import React from 'react';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface ILayout {
  children: React.ReactNode;
  pageTitle?: string;
}

export const Layout: React.FC<ILayout> = ({
  children,
  pageTitle = 'Para cuando?',
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="overflow-x-hidden">
        <Header />
        <main className="app-container ">{children}</main>
        <Footer />
      </div>
    </>
  );
};
