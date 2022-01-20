import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

function EditProductForm({ id }) {
    const initProductState = {
        name: "",
        category: "",
        price: "",
        tags: [""],
      };
      const [product, setProduct] = useState(initProductState);
      const [submitted,setSubmitted] = useState(false);
      useEffect(()=>{
          axios.get("http://localhost:5000/api/products/" +id).then((response)=>{
                setProduct(response.data);
          })
      }, [id])
    
      const handleInputChange = (event) => {
        let { name, value } = event.target;
        if (name === "tags") {
          value = value.split(",");
        }
        setProduct({...product, [name]: value });
      };
    
      const saveProduct = () => {
        const param = {
          name: product.name,
          category: product.category,
          price: product.price,
          tags: product.tags,
        };
        axios
          .put("http://localhost:5000/api/products/"+product._id, param)
          .then((response) => {
            console.log(response.data);
            setProduct({...product, })
            setSubmitted(true)
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const newProduct = () => {
        setSubmitted(false)
      }
    return (
        <div>
            <Container>
                <Row>
                    <h3>ProductName</h3>
                </Row>
            {submitted ? (
                <>
                    <Alert  color="success">U have submitted successfully !!</Alert>
                    <Button className="btn btn-success" onClick={newProduct}>Add new Product</Button>
                </>
                
            ):(
            <>
                <Form>
                    <FormGroup>
                    <Label for="productName">ProductName</Label>
                    <Input
                        type="text"
                        name="name"
                        id="productName"
                        value={product.name || ""}
                        onChange={handleInputChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="product Category">ProductCategory</Label>
                    <Input
                        type="text"
                        name="category"
                        id="category"
                        value={product.category || ""}
                        onChange={handleInputChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="product Price">ProductPrice</Label>
                    <Input
                        type="text"
                        name="price"
                        id="price"
                        value={product.price || ""}
                        onChange={handleInputChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="product Tags">ProductTags</Label>
                    <Input
                        type="text"
                        name="tags"
                        id="tags"
                        value={product.tags || ""}
                        onChange={handleInputChange}
                    />
                    </FormGroup>
                <Button onClick={saveProduct}>Update</Button>
        </Form>
      </>)}
      
            </Container>

        </div>
    )
}

export default EditProductForm
