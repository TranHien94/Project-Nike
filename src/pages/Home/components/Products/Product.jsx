import './product.scss';
import { Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { categoryActions } from '@rtk/category';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../stores/actions';

function Product() {
    const { id: category_id } = useParams();
    // console.log("id in category", category_id)
    const dispatch = useDispatch();


    const products = useSelector((store) => store.categoryStore.data);
    //console.log('hien da lay dc data product', products);
    useEffect(() => {

        dispatch(actions.categoryActions.findByCategory(category_id))
            .then((result) => {
                console.log("Dữ liệu sản phẩm trong Component:", result);
            })
            .catch((error) => {
                console.error("Lỗi trong Component:", error);
            });
    }, [category_id]);

    return (
        <div>
            <p>Product</p>
            {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                    <div className='product_container'>
                <div className='item_detail'>
                    <img src={product.avatar} alt={product.name} />
                    <div className='item_info'>
                        <h5>{product.name}</h5>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            </div>

                </Link>

                
            ))}
        </div>
    );
}

export default Product;
