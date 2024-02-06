// components/Menu.js
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';

import Navbar from './navbar';
import Footer from './footer';
// import { Container } from 'postcss';


const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Navbar />
        <Container>
          <main>{children}</main>
        </Container>
      <Footer />
    </>
  );
}

export default Layout ;
