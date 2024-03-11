import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { DiCodeigniter } from "react-icons/di";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../Pages/AuthContext';
import { useCart } from '../Pages/CartContext';

const Header = () => {
    const { cartItem } = useCart();

    const { islogin, logout } = useAuth();

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(cartItem.length);
    }, [cartItem])

    const logOutHandler = () => {
        logout();
    }
    return (
        <div className='head'>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <NavLink to="/" className="nav-link"><h4>Home</h4></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/about" className="nav-link"><h4>About</h4></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/services" className="nav-link"><h4>Services</h4></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/users" className="nav-link"><h4>Users</h4></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/shop" className="nav-link"><h4>Shop</h4></NavLink>
                </Nav.Item>
                {!islogin && <Nav.Item>
                    <NavLink to="/login" className="nav-link"><h4>Login</h4></NavLink>
                </Nav.Item>
                }
                {
                    islogin && <button className='btn btn-primary' onClick={() => logOutHandler()}>Logout</button>
                }

                <Nav.Item>
                    <NavLink to="/login" className="nav-link">{<FaRegHeart />}</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/cartpage" className="nav-link">{<BsCart />}{count}</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/login" className="nav-link">{<CgProfile />}</NavLink>
                </Nav.Item>

            </Nav>
        </div >
    )
}

export default Header