import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import * as authActions from "../../redux/actions/auth";
import { bindActionCreators } from "redux";


import AuthService from "../../authService";

function UserNav(props) {

  let client = new AuthService();

  let handleSignOut = (event) => {
    client.logout(props.auth.token).then((response) => {
      // handle success
      localStorage.removeItem('auth');
      props.actions.logout()
      props.history.push(props.location.pathname)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  let userNav = (
    <>
      <Navbar.Text className="font-weight-bold mx-3">
        Welcome, Guest
      </Navbar.Text>
      <Nav.Link as={Link} to="/home" href="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/agent" href="/agent">Agents</Nav.Link>
      <Nav.Link as={Link} to="/quotesHome" href="/quotesHome">Quotes</Nav.Link>
      <Nav.Link as={Link} to="/login" href="/login">Sign in</Nav.Link>
      <Nav.Link as={Link} to="/register" href="/register">Register</Nav.Link>
    </>
  )
  if (props.isAuthenticated) {
    userNav = (
      <>
      <Nav.Link as={Link} to="/home" href="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/agent" href="/agent">Agents</Nav.Link>
      <Nav.Link as={Link} to="/quote" href="/quote">Quotes</Nav.Link>
        <Navbar.Text className="font-weight-bold mx-3">
          Hello, {props.auth.email}
        </Navbar.Text>
        <Nav.Link as={Link} to={`/updateuser/${props.auth.email}`} href={`/updateuser/${props.auth.email}`}> Edit Profile</Nav.Link>
        <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
      </>
    )
  }

  return userNav;
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserNav));
