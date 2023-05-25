import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

const CartSumry = ({ cart, removeCart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu>
            {cart.map((item) => {
              return (
                <DropdownItem key={item.product.id}>
                  <Badge
                    color="danger"
                    onClick={() => removeCart(item.product)}
                  >
                    Remove
                  </Badge>
                  {item.product.productName}
                  <Badge>{item.quantity}</Badge>
                </DropdownItem>
              );
            })}

            <DropdownItem divider />
            <DropdownItem>
              <Link to="/cart">Cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        <NavItem>
          <NavLink>Emty cart</NavLink>
        </NavItem>
      )}
    </div>
  );
};

export default CartSumry;
