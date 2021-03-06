import React, { useState, useEffect } from "react";
import { Table, Container, Row, Button } from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

function ProductList() {
  const [products, setProducts] = useState([]);
  const updateProduct = () => {
    //https://product-api-007.herokuapp.com/api/products
    axios.get("https://product-api-007.herokuapp.com/api/products").then((response) => {
      setProducts(response.data);
      console.log("Updating Product list .........");
    });
  };

  useEffect(() => {
    updateProduct();
  }, []);
  const deleteProduct = (product) => {
    swal({
      title: "Do you want to delete product id " + product.name,
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
        //https://product-api-007.herokuapp.com/api/products
          .delete("https://product-api-007.herokuapp.com/api/products/" + product._id)
          .then((response) => {
            console.log(response.data);
            updateProduct();
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          });
      } //else {
      //   swal("Your imaginary file is safe!");
      // }
    });
  };
  return (
    <Container>
      <Row>
        <h3></h3>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button color="info" href={"/edit/" + product._id}>
                      <FontAwesomeIcon icon={faEdit} />
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteProduct(product);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default ProductList;
