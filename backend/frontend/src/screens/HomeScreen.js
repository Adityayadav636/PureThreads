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
import { Link } from "react-router-dom";

function HomeScreen({ history }) {
  const dispatch = useDispatch();  // Get the product list from the Redux store
  
  const productList = useSelector((state) => state.product.productList);

  const { products, loading, error, page, pages } = productList;
  const { pageNumber } = useParams();
  let keyword = history.location.search;

  // Fetch the product list when the component mounts or the keyword/parameters change
  useEffect(() => {
    dispatch(fetchProductList(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
   
  const latestProducts = products.slice(0, 4);

  return (<>
    
    <div>

      {!keyword && (
        // Show the ProductCarousel if no keyword is present
        <div  >
           <div style={{
      minHeight: '40vh',
      backgroundImage: 'url("https://img.freepik.com/premium-photo/five-different-colored-t-shirts-hanging-clothes-hangers_893012-45654.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={12}>
  <div style={{
    backgroundColor: 'transparent',
     
    borderRadius: '1rem',
    textAlign: 'center', 
    
  }}>
    <Typography variant="h3" style={{ color: 'powderblue', fontFamily: 'fangsong', fontWeight: 'bold', fontSize: '215%' }} gutterBottom>
      Welcome to PureThreads
    </Typography>
    <Typography variant="body1" style={{ color: 'green', fontSize: '80%' }} paragraph>
      Discover a wide range of stylish and comfortable T-shirts for every occasion.
    </Typography>
    <Link to="/productcards" style={{ textDecoration: 'none' }}>

    <Button variant="contained" color="secondary" style={{ marginTop: '1rem', color: 'black', backgroundColor: 'powderblue' , fontSize: '80%' }}>
      Explore Collection
    </Button>
    </Link>

  </div>
</Grid>

          
        </Grid>
      </Container>
    </div>
          <div
            style={{
              padding: "8px",
              marginTop: "20px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            TOP-RATED PRODUCTS
          </div>
          <ProductCarousel />
        </div>
      )}
      {loading ? (
        // Show loader while products are being fetched
        <Loader />
      ) : error ? (
        // Show error message if there's an error
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <div
          style={{
            padding: "8px",
            marginRight: "8px",
            marginBottom: "8px",
            borderRadius: "4px",
            border:  "none",
            fontWeight:  "normal",
            cursor: "pointer",
          }}
         >
          Latest Products
        </div>
          <Row>

            {latestProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
    </>
  );
}

export default HomeScreen;
