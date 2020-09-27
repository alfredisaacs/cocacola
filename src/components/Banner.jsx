import React from 'react'
import MenuButton from '../components/MenuButton'
import BannerImage from '../assets/images/banner.jpg'
import '../assets/styles/banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <MenuButton />
            <img className="banner__image" src={BannerImage} alt="Siente el sabor" />
            <div className="banner__text"><span>Siente el sabor</span></div>
        </div>
    )
}

export default Banner