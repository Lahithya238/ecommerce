import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext';
import Header from '../Components/Header';
import Table from 'react-bootstrap/Table';

const CartPage = () => {
    const { grandTotal } = useCart();
    const { deleteCartItem, buyProduct } = useCart();
    const { cartItem } = useCart();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        setCartData(cartItem);
    }, [cartItem]);

    const handleDelete = (id) => {
        deleteCartItem(id);
        // setCartData(deleteCartItem);
    }
    const handleBuy = (itembuy) => {
        console.log('handlebuy', itembuy)
        buyProduct(cartItem)


    }

    return (
        <div>
            <Header />
            <Table responsive>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData && cartData.length > 0 && cartData.map((items) => {
                            const { id, title, image, category, price } = items
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td><img src={image} style={{ height: '40px' }} /></td>
                                    <td>{category}</td>
                                    <td>{price}</td>
                                    <td><button onClick={() => handleDelete(items.id)}>Delete</button></td>
                                </tr>
                            )

                        })
                    }
                    <tr>
                        <td colSpan={4}>Grand Total</td>
                        <td>{grandTotal}</td>
                    </tr>
                    <tr>

                        <td><button onClick={(items) => handleBuy(items)}>Buy</button></td>

                    </tr>

                </tbody>

            </Table>
        </div>
    )
}

export default CartPage