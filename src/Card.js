import React from 'react'
import './Card.css'

function Card({ id, photo, name, location }) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
            <img className="mw-25" src={photo.src} alt={photo.alt} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card
