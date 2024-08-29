import React from 'react';
import CardProject from '../../components/CardProject';
const page = () => {
    return (
        <div className= "grid md:grid-cols-2">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
        </div>
    );
};

export default page;