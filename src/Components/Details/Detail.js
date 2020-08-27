import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Detail.css';

const Detail = (props) => {
    const {name, duration, picture, fee} = props.detail;
    return (
        <div className="col-md-4">
            <div className="single-item text-center my-4">
                <div className="card p-2">
                    <img className="card-img-top" src={picture} alt="course" />
                    <div className="card-body">
                        <h3 className="card-title">Course Title: {name}</h3>
                        <h4 className="card-title">Total Duration: {duration}</h4>
                        <h3 className="card-title">Cost: Tk. {fee}</h3>
                        <button className="btn btn-sm btn-primary" 
                                onClick={ () => props.handleAddCourse(props.detail)}>
                                <FontAwesomeIcon icon={faShoppingCart}/> Buy Course</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Detail;