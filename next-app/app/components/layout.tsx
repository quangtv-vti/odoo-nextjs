import Link from 'next/link';
import Container  from 'react-bootstrap/Container';

import Header from './header';
import Footer from './footer';
// import { Container } from 'postcss';


const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout ;
