import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// connect is a HOC, higher order component that lets us
// modify our component to have access to things related to redux
// HOCs are functions that take components as arguments
//  and return you a new suped up component

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

// debugger;

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
);

// mapStateToProps could technically by any name here but is standard with redux codebases
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // currentUser: state.user.currentUser,
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
