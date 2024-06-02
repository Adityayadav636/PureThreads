import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../redux/slices/productSlice";
import { Button, Container, Grid, Typography } from '@mui/material';

function ProductCards() {
    const dispatch = useDispatch();
    // Get the product list from the Redux store
    const productList = useSelector((state) => state.product.productList);
    const { products, loading, error, page, pages } = productList;
    const { pageNumber } = useParams();
    return (
        <div>
            <div
                style={{
                    padding: "8px",
                    marginRight: "8px",
                    marginBottom: "8px",
                    borderRadius: "4px",
                    border: "none",
                    fontWeight: "normal",
                    cursor: "pointer",
                }}
            >
                Products
            </div>
            <Row>

                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProductCards;
