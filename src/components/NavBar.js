import React from 'react'
import './NavBar.css'

export default function NavBar(props) {
    return (
        <div className="container-nav">
            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
            <ul className="links-container"> 
                 {props.tab.map(el=> 
                 <li className="link"> {el.link}
                    <ul className="dropdown">
                        {el.dropDownLinks && el.dropDownLinks.map(el=> <li className="dropdown-link">{el}</li>)}
                    </ul>
                 </li>)}   
            </ul>
        </div>
    )
}
