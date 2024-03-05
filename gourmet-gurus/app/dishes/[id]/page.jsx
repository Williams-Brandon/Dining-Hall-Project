import React from 'react';
import './styles.css'; // Import your CSS file for styling
import Rating from '@mui/material/Rating';


const tempImage = 'https://www.marionskitchen.com/wp-content/uploads/2019/09/Chinese-BBQ-Pork-Steamed-Buns4.jpg';

const Page = ({ params }) => {
    return (
        <div className="container">
            <div className="card">
                <img src={tempImage} alt="Yummy Food" className="image" />
                <div className="content">
                    <h1 className="title">Steamed Pork Buns<Rating name="half-rating-read" value={4.5} precision={0.5} readOnly className='pl-6 pt-4' /></h1>
                    <div className="divider"></div>
                    <div className="info">
                        <h2>Nutritional Info:</h2>
                        <ul>
                            <li>Protein: 14g</li>
                            <li>Fat: 46g</li>
                            <li>Carbs: 64g</li>
                            <li>Sugar: 9g</li>
                            <li><b>TOTAL CALORIES: 567</b></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <div className="review">
                    <p>This food is absolutely delicious! I highly recommend it.</p>
                    <p>- John Doe</p>
                </div>
                <div className="review">
                    <p>One of the best dishes I've ever tasted!</p>
                    <p>- Jane Smith</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
