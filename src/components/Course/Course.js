import React from 'react';
import './Course.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {

   const {img,name,price}= props.course
   const handleAddCourse = props.handleAddCourse
    return (
        <div className='course'>
            <img src={img} alt=""/>
            <h4> {name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddCourse(props.course)} className='btn btn-success' >Entroll Now</button>
        </div>
    );
};

export default Course;