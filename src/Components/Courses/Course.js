import React from 'react';
import { useState } from 'react';
import Fake from './Fake.js';
import { useEffect } from 'react';
import Detail from '../Details/Detail.js';
import Cart from '../Cart/Cart.js';

const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(Fake);
    }, [] );
    const [cart, setCart] = useState([]);

    const handleAddCourse = (detail) =>{
        const newCart = [...cart, detail];
        setCart(newCart);
    }
    
    return (
        <div className="container-fluid px-2">
            <div className="row food-items">
                <div className="col-md-9 row border-right">
                    {
                        courses.map( (detail) => <Detail detail={detail} handleAddCourse={handleAddCourse} key={detail.id}></Detail> )
                    }
                </div>
                <div className="col-md-3">
                    <Cart cart={cart} key={cart.id}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Course;