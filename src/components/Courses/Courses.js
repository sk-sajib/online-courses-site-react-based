import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData'
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css'


const Courses = () => {
        
        const first15 = fakeData.slice(0,15)
        const [courses,] = useState(first15)
        const [cart, setCart] = useState([])

        const handleAddCourse = (course) => {
            // console.log('course added', course)
            const newCart = [...cart, course]
            setCart(newCart)
        }

    return (
        <div className="main">
            <div className='courses-container'>
            

            {
                courses.map( course => <Course key={course.id} handleAddCourse={handleAddCourse} course={course}></Course>)
            }

          </div>
            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Courses;