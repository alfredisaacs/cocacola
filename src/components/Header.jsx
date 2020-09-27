import React from 'react'
import Logo from '../assets/images/logo.png'
import MenuButton from '../components/MenuButton'
import '../assets/styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <MenuButton />
            <div id="logo" className="header-logo">
                <img src={Logo} alt="Coca-cola" />
            </div>
        </header>
    )
}

export default Header