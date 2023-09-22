import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { useParams } from 'react-router-dom';
import { productActions } from '@rtk/product';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { RootContext } from '@/App';
import { message, Modal } from 'antd';
// import actions from '@/stores/actions';
import { Link } from 'react-router-dom'
import { deleteCartItem } from "../../../../stores/slices/cart"




export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleDelete = (productId) => {
        dispatch(deleteCartItem(productId));
    };

    // Tính toán tổng giỏ hàng
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <>
            <div className='container-cart'>
                <div className='left-cart'>
                    <table className='table-cart'>
                        <thead>
                            <tr className='trTitle-cart'>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Extras</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <tr className='tr-cart' key={cartItem.productId}>
                                    <td>
                                        <div className='imgContainer-cart'>
                                            <img
                                                src={cartItem.picture}
                                                layout="fill"
                                                objectFit="cover"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span className='name-cart'>{cartItem.title}</span>
                                    </td>
                                    <td>
                                        <span className='extras-cart'>
                                            {cartItem.ingredients}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='price-cart'>{convertToUSD(cartItem.price)}</span>
                                    </td>
                                    <td>
                                        <span className='quantity-cart'>{cartItem.quantity}</span>
                                    </td>
                                    <td>
                                        <span className='total-cart'>{(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(cartItem.productId)}>Delete
                                        </button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='right-cart'>
                    <div className='wrapper-cart'>
                        <h2 className='title-cart'>CART TOTAL</h2>
                        <div className='totalText-cart'>
                            <b className='totalTextTitle-cart'>Subtotal:</b> ${subtotal.toFixed(2)}
                        </div>
                        <div className='totalText-cart'>
                            <b className='totalTextTitle-cart'>Discount:</b> $0.00
                        </div>
                        <div className='totalText-cart'>
                            <b className='totalTextTitle-cart'>Total:</b> ${subtotal.toFixed(2)}
                        </div>
                        <Link to={'/cart/checkout'}>
                            <button className='button-cart'>CHECKOUT NOW!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
