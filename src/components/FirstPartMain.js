import React from 'react'
import "./FirstPartMain.css"
import ForWho from './ForWho'


export default function FirstPartMain(props) {
    return (
        <div>
             <img class="lead-logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"></img>
             <h1>Making the healthcare experience more human</h1>
             <div>
                 <ForWho dpcardsinfo={props.dpcardsinfo}/>
             </div>
        </div>
    )
}
