import React from 'react';
import CardItem from './../../components/CardItem';

// const webSkills = [
//     {
//         title:"HTML",
//         subtitle:"90%",
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcml0aZeHR6-BJLnnVy4ZkiFPKGL4ZX6_FXg&s"
//     },
//     {
//         title:"CSS",
//         subtitle:"80%",
//         img:"https://i.pinimg.com/736x/8e/95/47/8e95479da2c5e493b835c8533c2d5ba5.jpg"
//     },
//     {
//         title:"JAVASCRIPT",
//         subtitle:"60%",
//         img:"https://i.pinimg.com/564x/96/e6/8d/96e68d712f51757ac07cfe22354d8be8.jpg"
//     },
//     {
//         title:"REACT",
//         subtitle:"80%",
//         img:"https://i.pinimg.com/564x/48/e1/70/48e17004352a84f0d4e62dc5e1c2cfc3.jpg"
//     },
//     {
//         title:"VITE",
//         subtitle:"80%",
//         img:"https://i.pinimg.com/564x/82/b8/20/82b820a40956b6abee4e4df9a3485735.jpg"
//     },
//     {
//         title:"NEXT.JS",
//         subtitle:"70%",
//         img:"https://i.pinimg.com/564x/97/f9/46/97f9463b705b8ae898d380054c922951.jpg"
//     }


// ]

// const city = [
//     "dhaka", "pabna", "khulna"
// ]

const page = () => {
    return (
        <div>

            <div className="grid grid-cols-3">
            <CardItem img={"https://i.pinimg.com/564x/48/e1/70/48e17004352a84f0d4e62dc5e1c2cfc3.jpg"}
                    title="REACT"
                    subtitle="Learned Almost 80%"
                />
                <CardItem img={"https://i.pinimg.com/564x/82/b8/20/82b820a40956b6abee4e4df9a3485735.jpg"}
                    title="VITE"
                    subtitle="Learned Almost 80%"
                />
                <CardItem img={"https://i.pinimg.com/564x/97/f9/46/97f9463b705b8ae898d380054c922951.jpg"}
                    title="NEXT.JS"
                    subtitle="Learned Almost 70%"
                />
                <CardItem img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcml0aZeHR6-BJLnnVy4ZkiFPKGL4ZX6_FXg&s"}
                    title="HTML"
                    subtitle="Learned Almost 90%"
                />
                <CardItem img={"https://i.pinimg.com/736x/8e/95/47/8e95479da2c5e493b835c8533c2d5ba5.jpg"}
                    title="CSS"
                    subtitle="Learned Almost 80%"
                />
                <CardItem img={"https://i.pinimg.com/564x/96/e6/8d/96e68d712f51757ac07cfe22354d8be8.jpg"}
                    title="JAVASCRIPT"
                    subtitle="Learned Almost 60%"
                />
               
                <CardItem img={"https://i.pinimg.com/564x/82/83/ef/8283ef1a64afa5f280731f47d19ab156.jpg"}
                    title="BOOTSTRAP"
                    subtitle="Learned Almost 80%"
                />
                <CardItem img={"https://www.wahidali.dev/_app/immutable/assets/tailwindcss-banner-image-1d997d6a.webp"}
                    title="TAILWINDCSS"
                    subtitle="Learned Almost 80%"
                />
                <CardItem img={"https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg"}
                    title="FIGMA"
                    subtitle="Learned Almost 70%"
                />
            </div>



        </div>
    );
};

export default page;