import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import CartSumry from "./CartSumry";
import { Link } from "react-router-dom";

const Navi = ({ cart, removeCart }) => {
  return (
    <Navbar>
      <Link to="/">Main</Link>

      <Nav className="me-auto">
        <NavItem>
          <NavLink>Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>GitHub</NavLink>
        </NavItem>
        <CartSumry cart={cart} removeCart={removeCart} />
      </Nav>
      <NavbarText></NavbarText>
    </Navbar>
  );
};

export default Navi;
