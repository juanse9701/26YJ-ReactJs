import React from 'react';
import { GRID } from './style.js';

const Gallery = () => {
    return (
        <GRID>
            {
                [0, 1, 2, 3, 4, 5].map( d => {
                    return(
                        <div key={d}>
                            <p>{d}</p>
                        </div>
                    )
                })
            }
        </GRID>
    )
}

export default Gallery