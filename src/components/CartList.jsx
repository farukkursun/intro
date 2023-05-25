import React from "react";
import { Button, Table } from "reactstrap";

const CartList = ({ cart, removeCart }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>category Id</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Unit In stock</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.categoryId}</td>
              <td>{item.product.productName}</td>
              <td>{item.product.unitPrice}</td>
              <td>{item.product.unitInStock}</td>
              <td>{item.quantity}</td>
              <td>
                <Button onClick={() => removeCart(item.product)} color="danger">
                  Remove
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CartList;
