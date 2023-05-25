import { Container, Row, Col } from "reactstrap";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import alertify from "alertifyjs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFiend from "./components/NotFiend";
import CartList from "./components/CartList";

function App() {
  const [cart, setCart] = useState([]);
  const info = { title: "CategoryList", ekbilgi: "Bilgi" };
  const [ybilgi, setYbilgi] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = (yBilgi) => {
    let url = "http://localhost:3000/products";
    if (yBilgi) {
      url += "?categoryId=" + yBilgi;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts(ybilgi);
  }, [ybilgi]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(product.productName + " addet to cart!", 2);
    // console.log(cart);
  };

  const removeCart = (product) => {
    let newCart = [...cart];
    let removeItem = newCart.find((c) => c.product.id === product.id);
    if (removeItem && removeItem.quantity > 1) {
      removeItem.quantity -= 1;
    } else {
      newCart = cart.filter((c) => c.product.id !== product.id);
    }

    setCart(newCart);
    alertify.warning(product.productName + " remove to cart!");
  };

  // const removeCart = (product) => {
  //   let filterCart = cart.filter((c) => c.product.id !== product.id);
  //   setCart(filterCart);
  //   alertify.warning(product.productName + " remove to cart!");
  // };

  return (
    <div>
      <BrowserRouter>
        <Navi cart={cart} removeCart={removeCart} />
        <Container>
          <Row>
            <Col sm="12" md="3">
              <CategoryList setYbilgi={setYbilgi} ybilgi={ybilgi} item={info} />
            </Col>
            <Col sm="12" md="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      addToCart={addToCart}
                      products={products}
                      ybilgi={ybilgi}
                      item="ProductList"
                    />
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={<CartList cart={cart} removeCart={removeCart} />}
                />
                <Route path="*" element={<NotFiend />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
