import React from 'react'
import { IMAGE } from './style.js';

const Image = ({img, description, place}) => {
    return (
        <IMAGE>
            <img src={img} alt="img2" />
            {
                (description || place) ? (
                    <div className="message">
                        <p>{description}</p>
                        <p>{place}</p>
                     </div> ) : (null)
            }
        </IMAGE>
    )
}

export default Image;