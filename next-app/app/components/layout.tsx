"use client"

import Container  from 'react-bootstrap/Container';

import Header from './header';
import Footer from './footer';

import styles from './styles/layout.module.scss'
// import { Container } from 'postcss';


const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout ;
