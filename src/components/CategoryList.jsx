import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const CategoryList = ({ item, ybilgi, setYbilgi }) => {
  const [categorys, setCategorys] = useState([]);

  const getCatogeries = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategorys(data));
  };

  useEffect(() => {
    getCatogeries();
  }, []);

  const changeCategory = (bil) => {
    setYbilgi(bil);
  };
  return (
    <div>
      <h3>{item.title}</h3>

      <ListGroup>
        {categorys.map((category) => {
          return (
            <ListGroupItem
              active={category.id === ybilgi ? true : false}
              onClick={() => changeCategory(category.id)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      {/* <h3>{ybilgi}</h3> */}
    </div>
  );
};

export default CategoryList;
