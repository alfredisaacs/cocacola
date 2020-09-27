import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Video from '../components/Video'
import BottomImage from '../components/BottomImage'
import CountrySelector from '../components/CountrySelector'
import Footer from '../components/Footer'
import '../assets/styles/home.scss'

const Home = () => {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("container").classList.add("goDown");
        } else {
            document.getElementById("container").classList.remove("goDown");
        }
    }
    return (
        <div className="container" id="container">
            <div className="menu">
                <Menu />
            </div>
            <div className="content">
                <Header />
                <Banner />
                <Products />
                <Video />
                <BottomImage />
                <CountrySelector />
                <Footer />
            </div>
        </div>
    )
}

export default Home