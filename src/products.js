import React from "react";
const data = [
  {
    title: "Bánh tráng",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
    title: "Bánh dày",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
    title: "Bánh dày",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
    title: "Bánh dày",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
    title: "Bánh dày",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
    title: "Bánh bala",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card's content",
  },
];

const Products = () => {
  const renderList = data.map((item) => {
    return (
      <div className="card" style={{ width: " 18rem", margin: "30px" }}>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.descript}</p>
          <a href="#" className="btn btn-primary">
            Detail
          </a>
        </div>
      </div>
    );
  });

  return <div className="cart">{renderList}</div>;
};

export default Products;
