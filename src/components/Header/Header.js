import React, {useEffect, useState} from 'react';
import image1 from '../../assets/header-pic-1.jpg';
import image2 from '../../assets/header-photo-2.png';
import image3 from '../../assets/header-pic-3.jpg';
import './Header.scss';

const Header = () => {
    const images = [
        image1, image2, image3
    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const sliderId = setInterval(() => (index < images.length - 1 ? setIndex(index + 1) : setIndex(0)), 8000);
        return () => clearInterval(sliderId);
    })

    return (
        <div className="Header">
            <img src={images[index]} alt={index} />
        </div>
        )
};

export default Header;
