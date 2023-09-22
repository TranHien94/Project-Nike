import './category.scss';
import {Link} from 'react-router-dom';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { categoryActions } from '@rtk/category';
import actions from '../../../../stores/actions';

export default function Category() {

    const dispatch = useDispatch();
    const categories = useSelector(store => store.categoryStore.categories);
     console.log('hien da lay dc categories', categories);

    useEffect(() => {
        dispatch(actions.categoryActions.findAllCategory());
    }, []);


    return (
        <>
            <h3>Nike for People</h3>
            <div className='category_container' id='category'>
                {categories.map(category => (
                    <Link to={`/categories/${category.id}`} key={category.id} className='category_item'>
                        <img src={category.avatar} alt={category.title} />
                        <p>{category.title}</p>
                    </Link>
                ))}
            </div>

           
        </>
    )
}
