import React from 'react';
import { GRID } from './style.js';
import getImages from '../services/ImageService';

const [img1, img2, img3, img4, img5, img6, img7] = getImages();

const Gallery = () => {
    return (
        <GRID>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div>
                <img src={img2} alt="img2" />
            </div>
            <div>
                <img src={img3} alt="img3" />
            </div>
            <div>
                <img src={img4} alt="img4" />
            </div>
            <div>
                <img src={img5} alt="img5" />
            </div>
            <div>
                <img src={img6} alt="img6" />
            </div>
            <div>
                <img src={img7} alt="img7" />
            </div>
        </GRID>
    )
}

export default Gallery