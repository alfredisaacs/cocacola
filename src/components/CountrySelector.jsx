import React from 'react'
import Picker from '../assets/images/country-picker.png'
import '../assets/styles/countrySelector.scss'

const CountrySelector = () => {
    function openCountries() {
        document.getElementById('selector').classList.toggle("country-selector--opened")
    }
    return (
        <div className="country-selector" id="selector">
            <div className="country-selector__button" onClick={openCountries}>
                <img src={Picker} alt="Latin Center" />
                <p>Latin Center</p>
                <div className="arrow"></div>
            </div>
            <div className="country-selector__menu p-menu">
                <h3>Latin center</h3>
                <ul>
                    <li><a href="#">Bahamas</a></li>
                    <li><a href="#">Belize</a></li>
                    <li><a href="#">Caribbean</a></li>
                    <li><a href="#">Colombia</a></li>
                    <li><a href="#">Costa Rica</a></li>
                    <li><a href="#">Dominican Republic</a></li>
                    <li><a href="#">Ecuador</a></li>
                    <li><a href="#">El Salvador</a></li>
                    <li><a href="#">Guatemala</a></li>
                    <li><a href="#">Honduras</a></li>
                    <li><a href="#">Jamaica</a></li>
                    <li><a href="#">Nicaragua</a></li>
                    <li><a href="#">Panama</a></li>
                    <li><a href="#">Trinidad And Tobago</a></li>
                    <li><a href="#">Venezuela</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CountrySelector