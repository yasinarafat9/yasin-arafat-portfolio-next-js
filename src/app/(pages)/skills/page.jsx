import React from 'react';
import CardItem from './../../components/CardItem';

const page = () => {
    return (
        <div>
            Skills Page

            <div className="grid grid-cols-3">
                <CardItem img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcml0aZeHR6-BJLnnVy4ZkiFPKGL4ZX6_FXg&s"}
                    title="HTML"
                    subtitle="90%"
                />
                <CardItem img={"https://i.pinimg.com/736x/8e/95/47/8e95479da2c5e493b835c8533c2d5ba5.jpg"}
                    title="CSS"
                    subtitle="80%"
                />
                <CardItem img={"https://i.pinimg.com/564x/96/e6/8d/96e68d712f51757ac07cfe22354d8be8.jpg"}
                    title="JAVASCRIPT"
                    subtitle="60%"
                />
                <CardItem img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcml0aZeHR6-BJLnnVy4ZkiFPKGL4ZX6_FXg&s"}
                    title="REACT"
                    subtitle="80%"
                />
            </div>
        </div>
    );
};

export default page;