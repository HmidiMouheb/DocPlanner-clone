import React from 'react'
import "./SecondMainPart.css"
import FirstCardPattern from './FirstCardPattern'

export default function SecondMainPart() {
    return (
        <div className="second-main-part-container">
            <div className="the-work">
                <h2>The world's biggest healthcare platform</h2>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img src="https://www.docplanner.com/img/logo.png" alt="logo"></img>
            </div>
            <FirstCardPattern/>
        </div>
    )
}
