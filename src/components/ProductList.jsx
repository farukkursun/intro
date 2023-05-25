import React from "react";
import { Button, Table } from "reactstrap";

const ProductList = ({ item, products, addToCart }) => {
  //  console.log(products);

  return (
    <div>
      <h3>{item}</h3>

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro) => {
            return (
              <tr key={pro.id}>
                <th scope="row">{pro.id}</th>
                <td> {pro.productName} </td>
                <td> {pro.unitPrice} </td>
                <td> {pro.quantityPerUnit} </td>
                <td> {pro.unitsInStock} </td>
                <td>
                  <Button onClick={() => addToCart(pro)} color="info">
                    add
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
