// components/Menu.js
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <div className="navbar-brand">Home</div>
          </Link>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/services">
                  <div className="nav-link">Our Services</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop">
                  <div className="nav-link">Shop</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/myprofile">
                  <div className="nav-link">My Profile</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
