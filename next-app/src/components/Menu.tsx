// components/Menu.js
import Link from 'next/link';

const Menu = () => {
  return (
    <>
      {/* Include Bootstrap CSS from CDN */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />


      {/* Your menu content */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <div className="navbar-brand">Home</div>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
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

export default Menu;
