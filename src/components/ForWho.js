import React from 'react'
import "./ForWho.css"

export default function ForWho(props) {
    return (
        <div className="container">
            {props.dpcardsinfo.map((el,i)=>
                <div key={i}>
                     <p className="text">{el.text}</p>
                     <div className={el.class}>
                     <p className="for-who">{el.meantfor}</p>
                     <h2 className="what-to-do">{el.whattodo}</h2>
                     <div className="select-image">
                     { el.select &&
                        <select>
                             <option value="CHOOSE OPTION">CHOOSE OPTION</option>
                             <option value="Tunisia">Tunisia</option>
                             <option value="Algeria">Algeria</option>
                             <option value="France">France</option>
                             <option value="Hong-kong">Hong-kong</option>
                        </select>
                     }
                     <img src={el.photosrc} alt="Photo"></img>
                     </div>
                     </div>
                </div>
                
                )}  
        </div>
    )
}
