import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';

const Footer = () => {
  const footerItem = [
    {
      itemUrl: '/',
      label: 'Home',
      itemStyle: 'px-2 text-muted'
    }, 
    {
      itemUrl: '#',
      label: 'Features',
      itemStyle: 'px-2 text-muted'
    },
    {
      itemUrl: '#',
      label: 'Pricing',
      itemStyle: 'px-2 text-muted'
    },
    {
      itemUrl: '#',
      label: 'FAQs',
      itemStyle: 'px-2 text-muted'
    },
    {
      itemUrl: '#',
      label: 'Abount',
      itemStyle: 'px-2 text-muted'
    },
  ]
  return (
    <>
      <Container>
        <footer className="py-3 my-4">
          <Nav className="justify-content-center border-bottom pb-3 mb-3">
            {
              footerItem.map( item => (
                <NavItem><NavLink href={item.itemUrl} className={item.itemStyle}>{item.label}</NavLink></NavItem>
              ))
            } 
          </Nav>
          <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
