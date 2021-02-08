import React, { useState } from 'react';
import image1 from '../../assets/header-pic-1.jpg';
import image2 from '../../assets/header-photo-2.png';
import './Header.scss';

const Header = () => {
    const images = [
        image1, image2
    ]
    const [index, setIndex] = useState(0);

    const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
        console.log(index)
    };

    setInterval(() => {
        slideRight();
    }, 8000)

    return (
        <div className="Header">
            <img src={images[index]} alt={index} />
        </div>
        )
};


export default Header;
