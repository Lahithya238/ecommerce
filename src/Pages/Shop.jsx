import React from 'react'
import Header from '../Components/Header'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Shop = () => {

    const apiurl = 'https://fakestoreapi.com/products'
    const [carts, setCarts] = useState([]);
    const { islogin } = useAuth();
    const navigate = useNavigate();

    const { addToCart } = useCart();

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(apiurl);
            console.log(response.data);
            setCarts(response.data)
        }
        fetchdata();
    }, []);

    const addtocartHandler = (cartObj) => {
        console.log("items", cartObj)
        addToCart(cartObj);
    }

    const handlelogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <Header /><br />
            <Container>
                <Row>
                    <Col md={8}>
                        <select>
                            <option value={1}>All</option>
                            <option value={2}>Jewelery</option>
                            <option value={3}>Electronics</option>
                            <option value={4}>Women Clothing</option>
                        </select>
                    </Col>
                </Row>
            </Container><br />

            <Container fluid >
                <Row >
                    {
                        carts.length > 0 && carts.map((item, index) => (
                            <Col md={3} key={index} >
                                <Card style={{ width: '300px', height: '800px' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>

                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <h4>Rating:{item.rating.count}</h4>
                                        <h4>Rate:{item.rating.rate}</h4>
                                        <h3>Price:{item.price}</h3>
                                        {
                                            islogin ? <button onClick={() => addtocartHandler(item)}>Add to cart</button> : <button onClick={() => handlelogin()}>Add to cart</button>
                                        }
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Shop