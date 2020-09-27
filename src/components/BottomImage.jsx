import React from 'react'
import image from '../assets/images/bottomImage.jpg'
import '../assets/styles/bottomImage.scss'

const BottomImage = () => {
    return (
        <div className="bottom-image">
            <img src={image} alt="Coca-Cola" />
        </div>
    )
}

export default BottomImage