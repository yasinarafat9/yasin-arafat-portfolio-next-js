import React from 'react';

const CardItem = ({ img, title, subtitle }) => {
    return (
        <div className='cardItem container2'>
            <div>
                <img src={img} />
            </div>
            <div className="my-3">
                <h4>{title}</h4>
                <p>Learned Almost: {subtitle}</p>
            </div>
        </div>
    );
};

export default CardItem;